import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Button,
  ChakraProvider,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import "../../App.css";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";


const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  
  const toast = useToast();

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance.post("/auth/login", {
      email,
      password,
    })
    .then((response) => {
      setLoading(false);
      const result = response.data;
      if (result.errors) {
        setError(result.errors);
      } else {
        setError(null);
        dispatch({ type: "SET__USER", payload: result.userInfo });
        toast({
          title: "Login successful",
          status: "success",
          duration: 500,
          isClosable: true,
        });
        localStorage.setItem("auth_token", result.token);
        localStorage.setItem("user", JSON.stringify(result.userInfo));
        history('/');
      }
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      setError('Invalid email or password. Please try again.');
    });
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    axiosInstance.post("/auth/google-login", { token })
      .then((response) => {
        const result = response.data;
        if (result.errors) {
          setError(result.errors);
        } else {
          dispatch({ type: "SET__USER", payload: result.userInfo });
          localStorage.setItem("auth_token", result.token);
          localStorage.setItem("user", JSON.stringify(result.userInfo));
          history('/');
          toast({
            title: "Google Login successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Google login failed. Please try again.');
      });
  };

  const handleGoogleFailure = (response) => {
    console.log('Google login failed:', response);
    setError('Google login failed. Please try again.');
  };

  useEffect(() => {
    if (user && user.role === "Student") {
      history('/');
    } else if (user && user.role === "Admin") {
      history('/admin-dashboard');
    } else if (user && user.role === "Teacher") {
      history('/teacher-dashboard');
    } else if (user && user.role=== "Principal") {
      history('/principal-dashboard');
    }
  }, [user, history]);

  return (
    <>
      <Navbar />
      <ChakraProvider>
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ width: "100%", minHeight: "75vh", display: "flex", alignItems: "center" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Empower Learning <br />
                  <span className="text-primary">with Our LMS</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Discover a personalized and interactive way to enhance your skills
                  through our Learning Management System. Whether you're a student or
                  a professional, our platform provides top-quality resources, courses, and
                  tools to accelerate your learning journey.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    {error && (
                      <Alert status="error" mb="4">
                        <AlertIcon />
                        <AlertTitle mr={2}></AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError(null)} />
                      </Alert>
                    )}
                    <form onSubmit={formSubmitHandler}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                        <div className="text-end mt-1">
                          <Link to="/forgotPassword" className="small fw-bold mt-2 pt-1 mb-0">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>


                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign up
                      </button>

                      <div className="text-center">
                        <Box textAlign="center">
                          <Box as="p">or sign in with:</Box>
                          <Flex justify="center" mt="2">
                            <GoogleLogin
                              clientId={CLIENT_ID}
                              onSuccess={handleGoogleSuccess}
                              onFailure={handleGoogleFailure}
                              render={({ onClick }) => (
                                <Button
                                  as="button"
                                  variant="link"
                                  onClick={onClick}
                                  color="blue.500"
                                  mx="3"
                                  size="sm"
                                >
                                  <FaGoogle />
                                </Button>
                              )} />
                          </Flex>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <Link to="/register" className="link-danger">
                              Register
                            </Link>
                          </p>
                        </Box>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            .row {
              flex-direction: column-reverse;
            }
            h1 {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
            .card {
              margin-top: 2rem;
            }
            .card-body {
              padding: 2rem;
            }
          }

          @media (max-width: 576px) {
            h1 {
              font-size: 1.75rem;
            }
            p {
              font-size: 0.9rem;
            }
            .form-outline input {
              padding: 0.75rem;
            }
            .card-body {
              padding: 1.5rem;
            }
          }
        `}
        </style>
      </ChakraProvider>
      <Footer />
    </>
  );
}

export default Login;
