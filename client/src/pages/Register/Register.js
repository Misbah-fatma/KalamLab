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
import { useSelector } from "react-redux";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import { GoogleLogin } from '@react-oauth/google';


const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Register() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const toast = useToast(); // Initialize useToast hook

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
      confirmPassword,
    })
      .then((response) => {
        setLoading(false);
        const result = response.data;
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          setError(null);
          toast({
            title: "Registration successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setTimeout(() => {
            history("/login");
          }, 500);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
        console.log(error);
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
    }
  }, [user]);

  return (
    <>
    <Navbar />
    <ChakraProvider>
     {/* <Container maxW="full" bgImage={`url(${bg})`} bgSize="cover" bgPos="center" >
        <Center minH="100vh">
          <Box maxW="lg" mx="auto" bg="rgba(255, 255, 255, 0.8)" boxShadow="xl" borderRadius="xl" p="8" position="relative" top="-40px" backdropFilter="blur(30px)" >
            <Box textAlign="center">
              <Heading as="h2" fontWeight="bold" mb="5">Sign up </Heading>
            </Box>
            <form onSubmit={formSubmitHandler}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <Flex mb="4">
                <Box flex="1" mr="2">
                  <Input variant="filled" mb="4" onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter Your Username" />
                </Box>
              </Flex>

              <Input variant="filled" mb="4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Input variant="filled" mb="4" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Input variant="filled" mb="4" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

              <Flex justify="center" mb="4">
                <Checkbox id="newsletter" size="lg" defaultChecked />
                <Box as="label" ml="2" htmlFor="newsletter">Subscribe to our newsletter</Box>
              </Flex>

              <Button type="submit" colorScheme="blue" size="md" mb="4" w="full">Sign Up</Button>

              <Box textAlign="center">
                <Box as="p">or sign up with:</Box>
                <Flex justify="center" mt="2">
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaFacebookF /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaTwitter /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaGoogle /></Button>
                  <Button as="a" variant="link" href="#" color="blue.500" mx="3" size="sm"><FaGithub /></Button>
                </Flex>
                <p className="small fw-bold mt-2 pt-1 mb-0"><Link to="/login"
                  className="text-black">Already User? <span className="link-danger">Login to Your Account</span></Link></p>
              </Box>
            </form>
          </Box>
        </Center>
      </Container> */}

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
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter Your Username" />
                    </div>
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
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        placeholder="Confirm Password" 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        defaultChecked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
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
                        <p className="small fw-bold mt-2 pt-1 mb-0"><Link to="/login"
                  className="text-black">Already User? 
                  <span className="link-danger">Login to Your Account</span></Link></p>
           
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
    <Footer/>
    </>
  );
}

export default Register;
