import React, { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, Badge, Button } from "@mui/material";
import SchoolRegistration from "../LandingPage/SchoolRegistration"; // Import the School Registration form
import TeacherRegistration from "../LandingPage/TeacherRegistration"; // Import the Teacher Registration form
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Projects = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const [isSchoolFormOpen, setSchoolFormOpen] = useState(false);
  const [isTeacherFormOpen, setTeacherFormOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
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
    navigate("/login");
  };

  const handleDropdownToggleUser = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  const state = useSelector((state) => state.cart);


  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src="/assets/logo10.png" alt="Logo" />
          </a>

          <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? "navmenu-mobile" : ""}`}>
            <ul>
              <li>
                <a href="/" >Home</a>
              </li>
              <li>
                <a href="/Courses1">Courses</a>
              </li>
              <li>
                <a href="/cart">   <Badge badgeContent={state ? state.length : 0} color="secondary">
          <ShoppingCartIcon /> Cart
        </Badge></a>
              </li>

              <li className={`dropdown ${openDropdown === 1 ? 'active' : ''}`}>
              <a href="#" onClick={() => handleDropdownToggle(1)}>
                <span>Robotics</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={`${openDropdown === 1 ? 'dropdown-open' : ''}`}>
                <li>
                  <a href="/robotics">Overview</a>
                </li>
             
                <li>
                  <a href="/roboticsGallery">Gallery</a>
                </li>
                <li>
                  <a href="/projects">Our Projects</a>
                </li>

                <li>
                  <a href="/roboticsDetails">Products </a>
                </li>
               
              </ul>
            </li>
            <li className={`dropdown ${openDropdown === 1 ? 'active' : ''}`}>
              <a href="#" onClick={() => handleDropdownToggle(1)}>
                <span>Editors</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={`${openDropdown === 1 ? 'dropdown-open' : ''}`}>
                <li>
                  <a href="/codeEditor">Code Editor</a>
                </li>
             
                <li>
                  <a href="/yjseditor">C-Board</a>
                </li>
                <li>
                  <a href="/blockly2">Blockly</a>
                </li>
               
              </ul>
            </li>

            <li className={`dropdown ${openDropdown === 1 ? 'active' : ''}`}>
              <a href="#" onClick={() => handleDropdownToggle(1)}>
                <span>AI & ML</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={`${openDropdown === 1 ? 'dropdown-open' : ''}`}>
                <li>
                  <a href="/aiModel">AI Model</a>
                </li>
             
                <li>
                  <a href="/mlModel">ML Model</a>
                </li>
                <li>
                  <a href="/caseStudy">Case Study</a>
                </li>
               
              </ul>
            </li>


              <li className={`dropdown ${openDropdown === 1 ? "active" : ""}`}>
                <a href="#" onClick={() => handleDropdownToggle(1)}>
                  <span>Join Us</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={`${openDropdown === 1 ? "dropdown-open" : ""}`}>
                  <li>
                    <a href="#" onClick={() => setSchoolFormOpen(true)}>
                      School Registration
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setTeacherFormOpen(true)}>
                      Teacher Registration
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <i
            className={`mobile-nav-toggle bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileMenu}
          ></i>

{userData ? (
  <>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleDropdownToggleUser("userDropdown");
      }}
      className="user-dropdown-toggle btn-getstarted"
    >
      {userData.userName} <i className="bi bi-chevron-down"></i>
    </a>
    <ul
      className={`user-dropdown-menu ${
        openDropdown === "userDropdown" ? "dropdown-open" : ""
      }`}
    >
      <li>
        {/* Adjust dashboard link based on role */}
        <a
          href={
            userData.role === "Admin"
              ? "/admin-dashboard"
              : userData.role === "Teacher"
              ? "/teacher-dashboard"
              : userData.role === "Principal"
              ? "/principal-dashboard"
              : "/student-dashboard"
          }
        >
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" onClick={handleLogout}>
          <i className="fa fa-sign-out" style={{ color: "red" }}></i>
          &nbsp; Logout
        </a>
      </li>
    </ul>
  </>
) : (
  <a className="btn-getstarted" href="/login">
    Login
  </a>
)}


        </div>
      </header>

      {/* School Registration Modal */}
      <Dialog 
  open={isSchoolFormOpen} 
  onClose={() => setSchoolFormOpen(false)} 
  maxWidth="md" 
  fullWidth
>

  <DialogContent>
    <SchoolRegistration /> {/* Render the School Registration Form here */}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setSchoolFormOpen(false)} color="primary">Close</Button>
  </DialogActions>
</Dialog>

<Dialog 
  open={isTeacherFormOpen} 
  onClose={() => setTeacherFormOpen(false)} 
  maxWidth="md" 
  fullWidth
>
 
  <DialogContent>
    <TeacherRegistration /> {/* Render the Teacher Registration Form here */}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setTeacherFormOpen(false)} color="primary">Close</Button>
  </DialogActions>
</Dialog>

    </>
  );
};

export default Projects;
