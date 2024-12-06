// ResetPassword.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  console.log("hemmlo");
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    console.log('Token:', token);  // Check token value
    console.log('ResetPassword Component Mounted');  // Ensure component renders
  }, [token]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axiosInstance.post(`/users/resetpassword/${token}`,{ password });
      setMessage(res.data.message);
      console.log(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
      console.error('Error resetting password:', error);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center bg-light" style={{ minHeight: '80vh' }}>
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border-light rounded-3 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <Link to="/">
                      <img src="/logo10.png" alt="Company Logo" width="155" height="47" />
                    </Link>
                  </div>
                  <h2 className="fs-5 fw-bold text-center text-dark mb-4">
                    Reset Your Password
                  </h2>
                  <p className="text-center text-muted mb-4">
                    Your verification is complete. You can now reset your password below.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 position-relative">
                      <div className="form-floating">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="newPassword"
                          placeholder="Enter your new password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required />
                        <label htmlFor="newPassword">New Password</label>
                      </div>
                      <i
                        className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                        onClick={togglePasswordVisibility}
                        style={{
                          position: 'absolute',
                          right: '15px',
                          top: '15px',
                          cursor: 'pointer',
                        }}
                      ></i>
                    </div>
                    <div className="mb-3 position-relative">
                      <div className="form-floating">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                      </div>
                      <i
                        className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                        onClick={toggleConfirmPasswordVisibility}
                        style={{
                          position: 'absolute',
                          right: '15px',
                          top: '15px',
                          cursor: 'pointer',
                        }}
                      ></i>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" type="submit">Reset Password</button>
                    </div>
                    {message && (
                      <div className={`alert ${message === 'Passwords do not match' ? 'alert-danger' : 'alert-info'} text-center mt-3`} role="alert">
                        {message}
                      </div>
                    )}
                    <div className="d-flex justify-content-between mt-4">
                      <Link to="/login" className="link-primary text-decoration-none">Log In</Link>
                      <Link to="/register" className="link-primary text-decoration-none">Register</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResetPassword;
