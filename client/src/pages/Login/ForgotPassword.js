import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../LandingPage/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/users/forgotpassword', { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <><Navbar />
    <div className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border-light rounded-3 shadow-sm">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <a href="#!">
                    <img src="/logo10.png" alt="BootstrapBrain Logo" width="155" height="47" />
                  </a>
                </div>
                <h2 className="fs-5 fw-normal text-center text-secondary mb-4">
                  Enter your email address to reset your password.
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                      <label htmlFor="email" className="form-label">Email</label>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">Reset Password</button>
                  </div>
                  {message && (
                    <div className="alert alert-info text-center mt-3" role="alert">
                      {message}
                    </div>
                  )}
                  <div className="d-flex justify-content-between mt-4">
                    <a href="#!" className="link-primary text-decoration-none">Log In</a>
                    <a href="#!" className="link-primary text-decoration-none">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></>
  );
};

export default ForgotPassword;

      