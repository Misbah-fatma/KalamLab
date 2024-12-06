import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./SideBarAi";

const AI = () => {
  const [userData, setUserData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    console.log("Retrieved from storage:", userDataFromStorage);

    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      AI Model
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <Container maxWidth="lg" sx={{ mt: 10 }}>
                          <Typography variant="h3" gutterBottom>
                            Welcome to Artificial Intelligence
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Artificial Intelligence (AI) represents a transformative leap in technology, revolutionizing industries and enhancing human capabilities. At its essence, AI involves the development of systems capable of performing tasks that normally require human intelligence, such as understanding natural language, recognizing patterns, and making informed decisions.
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            In the realm of AI, machine learning, natural language processing, and computer vision are leading advancements that enable machines to learn from data, comprehend human language, and interpret visual information. These technologies are driving innovation across various sectors, from healthcare and finance to manufacturing and entertainment.
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Our platform provides cutting-edge AI tools and applications designed to empower both novices and experts. Whether you're interested in sentiment analysis, convolutional neural networks (CNNs), natural language processing (NLP), or TF-IDF, we offer comprehensive resources to support your exploration and mastery of AI.
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Join us on this journey to unlock the potential of AI, where you'll find the latest research, practical applications, and a community dedicated to advancing the field of artificial intelligence.
                          </Typography>
                        </Container>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
