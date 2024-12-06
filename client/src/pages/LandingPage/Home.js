import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import News from './News';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [items, setItems] = useState([]);
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/');
          setItems(response.data);
        } catch (error) {
          console.error('Failed to fetch items: ' + error.message);
        }
      };
  
      fetchData();
    }, []);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get('/posts/details'); 
                setPosts(response.data.posts);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? posts.length - 1 : prevIndex - 1
      );
    };

    
    return (
        <>
       
     <Navbar/>
     
     <section id="hero" class="hero section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
          <div class="company-badge mb-4">
            <i class="bi bi-globe me-2"></i>
            Shaping the Future of Learning
          </div>
          <h1 class="mb-4">
            Virtual Education <br />
            Redefined by <br />
            <span class="accent-text">KALAM LAB</span>
          </h1>
          <p class="mb-4 mb-md-5">
            Join a global community of schools and students accessing cutting-edge virtual classrooms for STEM, AI, Robotics, IoT, and beyond.
          </p>
          <div class="hero-buttons">
            <a href="/joinUs" class="btn btn-primary me-0 me-sm-2 mx-1">Join Kalam Lab</a>
            <a href="https://www.youtube.com/watch?v=YourVideoLink" class="btn btn-link mt-2 mt-sm-0 glightbox">
              <i class="bi bi-play-circle me-1"></i>
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hero-image" data-aos="zoom-out" data-aos-delay="300">
          <img src="https://www.virtualelementaryschool.com/wp-content/uploads/2021/08/VES-Hompage-Header-animation-image-only.png" alt="Hero Image" class="img-fluid" />
          <div class="customers-badge">
            <div class="customer-avatars">
              <img src="/img/avatar-1.webp" alt="Student 1" class="avatar" />
              <img src="/img/avatar-2.webp" alt="Student 2" class="avatar" />
              <img src="/img/avatar-3.webp" alt="Student 3" class="avatar" />
              <img src="/img/avatar-4.webp" alt="Student 4" class="avatar" />
              <img src="/img/avatar-5.webp" alt="Student 5" class="avatar" />
            </div>
            <p class="mb-0 mt-2">Empowering 50,000+ students and 500+ schools globally.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-trophy"></i>
          </div>
          <div class="stat-content">
            <h4>500+ Schools</h4>
            <p class="mb-0">Partnered with Kalam Lab</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-people-fill"></i>
          </div>
          <div class="stat-content">
            <h4>50k Students</h4>
            <p class="mb-0">Learning future-ready skills</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-journal-richtext"></i>
          </div>
          <div class="stat-content">
            <h4>2,000+ Programs</h4>
            <p class="mb-0">Designed for 21st-century learners</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-award"></i>
          </div>
          <div class="stat-content">
            <h4>Award-Winning</h4>
            <p class="mb-0">Transforming global education</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="about section m-8">
  <div class="container p-4" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4 align-items-center justify-content-between">
      <div class="col-xl-5" data-aos="fade-up" data-aos-delay="200">
        <span class="about-meta">ABOUT KALAM LAB</span>
        <h2 class="about-title">Innovating Virtual Classrooms</h2>
        <p class="about-description">
          Kalam Lab is a virtual school revolutionizing education by integrating AI, immersive technologies, and collaborative tools. We bring schools and students together on a single platform, ensuring access to world-class education from anywhere.
        </p>
        <div class="row feature-list-wrapper">
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> AI-Powered Classrooms</li>
              <li><i class="bi bi-check-circle-fill"></i> Real-Time Analytics</li>
              <li><i class="bi bi-check-circle-fill"></i> STEM-Driven Curriculum</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> Flexible Enrollment</li>
              <li><i class="bi bi-check-circle-fill"></i> Global Collaboration</li>
              <li><i class="bi bi-check-circle-fill"></i> Multi-Device Learning</li>
            </ul>
          </div>
        </div>
        <div class="info-wrapper">
          <div class="row gy-4">
            <div class="col-lg-7">
              <div class="profile d-flex align-items-center gap-3">
                <img src="/assets/img/kuldeepji.png" alt="Founder Profile" class="profile-image"/>
                <div>
                  <h4 class="profile-name">Mr. Sandeep Kumar</h4>
                  <p class="profile-position">Founder &amp; Visionary</p>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="contact-info d-flex align-items-center gap-2">
                <i class="bi bi-telephone-fill"></i>
                <div>
                  <p class="contact-label">Reach out to us</p>
                  <p class="contact-number">+91-9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6" data-aos="fade-up" data-aos-delay="300">
        <div class="image-wrapper">
          <div class="images position-relative" data-aos="zoom-out" data-aos-delay="400">
            <img src="https://www.iitms.co.in/images/Learning-management-system-info.png" alt="Virtual School Features" class="img-fluid main-image rounded-4" />
          </div>
          <div class="experience-badge floating">
            <h3>10+ <span>Years</span></h3>
            <p>Experience in transforming education</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="features-cards" class="features-cards section">
  <div class="container">
    <div class="row gy-4">
   
      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="feature-box orange">
          <i class="bi bi-laptop"></i>
          <h4>Interactive Courses</h4>
          <p>Engage with dynamic, hands-on content across programming, data science, and AI domains.</p>
        </div>
      </div>

     
      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div class="feature-box blue">
          <i class="bi bi-bookmark-check"></i>
          <h4>Industry-Recognized Certifications</h4>
          <p>Earn certifications from leading authorities, boosting your credentials in tech industries.</p>
        </div>
      </div>

     
      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
        <div class="feature-box green">
          <i class="bi bi-lightbulb"></i>
          <h4>Practical Learning</h4>
          <p>Master real-world skills through project-based learning and solve challenges with innovation.</p>
        </div>
      </div>

     
      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
        <div class="feature-box red">
          <i class="bi bi-person-circle"></i>
          <h4>Personalized Dashboard</h4>
          <p>Track your progress, access learning materials, and plan your journey through a custom dashboard.</p>
        </div>
      </div>
    </div>
  </div>
</section>



         
            <a className=" py-5 d-block bg-primary mt-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md10"
      ><h2 className="text-white">Let's Get Started</h2></div>
    </div>
  </div>  
</a>


<section class="py-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center mt-4">
      <div class="col-12">
        <h2 class="mb-4 display-5 text-center">Courses to Lead Robotics and AI Innovations</h2>
        <p class="text-secondary m-4 mb-5 text-center">
          Explore cutting-edge courses designed to shape the future of Robotics and AI. Master technologies driving automation, machine intelligence, and beyond.
        </p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-5 gx-md-5 justify-content-center">
    
      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-robot"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">Introduction to Robotics</h4>
            <p class="mb-3 text-secondary">
              Learn the fundamentals of robotics, including robot design, programming, and integration with real-world systems.
            </p>
            <a href="/robotics-intro" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-brain"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">AI & Machine Learning</h4>
            <p class="mb-3 text-secondary">
              Dive into AI and machine learning algorithms. Work on real-world datasets and build predictive models.
            </p>
            <a href="/ai-machine-learning" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-network-wired"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">Autonomous Systems</h4>
            <p class="mb-3 text-secondary">
              Understand the principles of autonomous systems, from self-driving cars to intelligent drones and beyond.
            </p>
            <a href="/autonomous-systems" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-code"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">Robot Programming</h4>
            <p class="mb-3 text-secondary">
              Learn to program robots using ROS (Robot Operating System) and other frameworks. Build intelligent robotics applications.
            </p>
            <a href="/robot-programming" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-tools"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">Robotics Hardware Design</h4>
            <p class="mb-3 text-secondary">
              Learn about robot mechanics, sensors, and actuators. Design and build robotic systems from the ground up.
            </p>
            <a href="/robotics-hardware" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
        <div class="row gy-4">
          <div class="col-12 col-lg-2">
            <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle text-white">
              <i class="fas fa-project-diagram"></i>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <h4 class="mb-3">Robotics Project Management</h4>
            <p class="mb-3 text-secondary">
              Gain expertise in managing robotics projects, from ideation to execution. Learn strategies for innovation and teamwork in tech environments.
            </p>
            <a href="/robotics-project-management" class="fw-bold text-decoration-none link-primary">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>






<section class="bg-light py-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 ">
        <h3 class="fs-6 mb-2 text-secondary text-center text-uppercase">Our Expertise</h3>
        <h2 class="display-5 mb-5 text-center">We excel in providing top-notch skills for your success.</h2>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-xl-0">
  
      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 border-bottom border-primary shadow-sm">
          <div class="card-body text-center p-4 p-xxl-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-code text-primary mb-4" viewBox="0 0 16 16">
              <path d="M5.719 3.858a.5.5 0 0 0-.638-.058L.58 7.42a.5.5 0 0 0 0 .758l4.5 3.5a.5.5 0 1 0 .638-.766L1.545 8 5.719 4.624a.5.5 0 0 0 .058-.766ZM10.281 3.858a.5.5 0 0 1 .638-.058l4.5 3.5a.5.5 0 0 1 0 .758l-4.5 3.5a.5.5 0 1 1-.638-.766L14.455 8 10.281 4.624a.5.5 0 0 1-.058-.766Z" />
              <path d="M6.854 11.146a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0ZM9.146 4.854a.5.5 0 0 1 0-.708l1-1a.5.5 0 1 1 .708.708l-1 1a.5.5 0 0 1-.708 0Z" />
            </svg>
            <h4 class="mb-4">Programming</h4>
            <p class="mb-4 text-secondary">Expertise in modern programming languages like JavaScript, Python, and Java to build innovative solutions.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 border-bottom border-primary shadow-sm">
          <div class="card-body text-center p-4 p-xxl-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-bar-chart text-primary mb-4" viewBox="0 0 16 16">
              <path d="M0 0h1v15h15v1H0V0Zm10 5h2v8h-2V5ZM6 8h2v5H6V8ZM2 11h2v2H2v-2Z" />
            </svg>
            <h4 class="mb-4">Critical Thinking</h4>
            <p class="mb-4 text-secondary">Develop expertise in tackling multifaceted difficult problems with structured IoT-based solutions.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 border-bottom border-primary shadow-sm">
          <div class="card-body text-center p-4 p-xxl-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-brush text-primary mb-4" viewBox="0 0 16 16">
              <path d="M15.825.14c-.646-.646-2.313.38-4.1 2.168-.272.271-.516.539-.733.802-1.62-1.273-3.553-1.504-4.91-.148-1.19 1.19-.97 3.219.242 4.968L.563 12.512a.25.25 0 0 0-.045.253c.302.756.548 1.374.677 1.673.143.33.347.56.58.663.244.107.521.101.92-.013.308-.09.654-.229 1.024-.403a.255.255 0 0 0 .09-.378L7.392 7.6c1.75 1.21 3.777 1.432 4.969.241 1.356-1.356 1.125-3.289-.148-4.91.263-.217.53-.46.802-.732 1.787-1.788 2.813-3.454 2.168-4.1ZM2.507 13.934c-.244.084-.468.152-.664.204.109-.196.2-.42.285-.657l.037-.1c.049-.133.097-.265.145-.388l.197.197c-.46.248-.592.324-.637.344ZM1.05 15h-.03.03Zm.005-.001.016.001H1.05Zm.022.002h-.023.023Z" />
            </svg>
            <h4 class="mb-4">Creative Design</h4>
            <p class="mb-4 text-secondary">Delivering stunning and user-centric designs for web, mobile, and print media that leave a lasting impression.</p>
          </div>
        </div>
      </div>
    
      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 border-bottom border-primary shadow-sm">
          <div class="card-body text-center p-4 p-xxl-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-shield-lock text-primary mb-4" viewBox="0 0 16 16">
              <path d="M5.072 11.293a.5.5 0 0 0 .708-.707 3 3 0 1 1 4.24 0 .5.5 0 1 0 .708.707 4 4 0 1 0-5.656 0ZM8 4a2 2 0 0 1 1.716 3.008A2.99 2.99 0 0 1 8 6a2.99 2.99 0 0 1-1.716.992A2 2 0 0 1 8 4Z" />
              <path d="M8 0c-.69 0-1.382.04-2.073.115C4.224.26 3.443.525 2.854.9a4.001 4.001 0 0 0-1.878 3.053C.497 5.98 0 8.013 0 10.124c0 4.124 4.167 5.907 8 5.907s8-1.783 8-5.907c0-2.11-.497-4.144-1.975-6.171A4.001 4.001 0 0 0 13.146.9c-.59-.375-1.37-.64-2.073-.785A25.362 25.362 0 0 0 8 0Zm.52 11.743a3.522 3.522 0 0 1-1.04 0 3.496 3.496 0 0 1-.52-6.925V2.757a5.977 5.977 0 0 1 1.56 0v2.061a3.497 3.497 0 0 1-.52 6.925Z" />
            </svg>
            <h4 class="mb-4">Cybersecurity</h4>
            <p class="mb-4 text-secondary">Ensuring secure systems by implementing best practices in cybersecurity and vulnerability management.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  
      <section id="call-to-action-2" className="call-to-action-2 section dark-background">
    <div className="container">
      <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Empower Young Minds with AdvisionsLab</h3>
            <p>
              Join the movement to foster innovation and creativity in the next generation. 
              AdvisionsLab equips students with essential skills in robotics, AI, and STEM fields, 
              preparing them for a bright future in technology and beyond.
            </p>
            <a className="cta-btn" href="/Courses1">
              Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
           <Footer/>
            
        </>
    )
}

export default Home
