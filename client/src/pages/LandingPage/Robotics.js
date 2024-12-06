import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

const StemRobo = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is AdvisionsLab?",
      answer: "AdvisionsLab is an educational platform that empowers students with hands-on learning experiences in science, technology, engineering, and mathematics using robotics and AI.",
    },
    {
      question: "Who can enroll in AdvisionsLab programs?",
      answer: "Our programs are designed for students of all ages, educators, and enthusiasts who want to explore robotics and STEM fields.",
    },
    {
      question: "Do I need prior knowledge of robotics to join?",
      answer: "No prior knowledge is needed! Our programs are tailored for beginners and advanced learners alike.",
    },
    {
      question: "What tools or kits do I need?",
      answer: "We provide all the necessary robotics kits and software tools required for our programs. You only need a laptop or computer.",
    },
    {
      question: "How are the programs conducted?",
      answer: "Programs are conducted online and offline. For online sessions, we use interactive platforms with live classes and video tutorials.",
    },
    {
      question: "Can I build my own robot during the course?",
      answer: "Yes, you will have the opportunity to build and program your own robots as part of our hands-on learning approach.",
    },
  ];

  return (
    <div> 
      <Navbar/>
       <main class="main">

    
       <section id="hero" class="hero section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
          <div class="company-badge mb-4">
            <i class="bi bi-gear-fill me-2"></i>
            Empowering Future Innovators
          </div>
          <h1 class="mb-4">
            IOT, Robotics &amp; <br />
            AI Learning with <br />
            <span class="accent-text">ADVISIONS</span>
          </h1>
          <p class="mb-4 mb-md-5">
            Equipping K-12 students with 21st-century skills like STEM, Coding, Robotics, AI, IoT, AR, and VR to create a world of innovation and opportunity.
          </p>
          <div class="hero-buttons">
            <a href="/roboticsDetails" class="btn btn-primary me-0 me-sm-2 mx-1">Our Products</a>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="btn btn-link mt-2 mt-sm-0 glightbox">
              <i class="bi bi-play-circle me-1"></i>
              Watch Video
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hero-image" data-aos="zoom-out" data-aos-delay="300">
        <img src="/img/illustration-1.webp" alt="Hero Image" class="img-fluid"/>

<div class="customers-badge">
  <div class="customer-avatars">
    <img src="/img/avatar-1.webp" alt="Customer 1" class="avatar"/>
    <img src="/img/avatar-2.webp" alt="Customer 2" class="avatar"/>
    <img src="/img/avatar-3.webp" alt="Customer 3" class="avatar"/>
    <img src="/img/avatar-4.webp" alt="Customer 4" class="avatar"/>
    <img src="/img/avatar-5.webp" alt="Customer 5" class="avatar"/>
    </div>
            <p class="mb-0 mt-2">10,000+ students learning innovation through our programme.</p>
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
            <h4>100+ Labs</h4>
            <p class="mb-0">AdvisionsLab &amp; Robotics Labs across schools</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-briefcase"></i>
          </div>
          <div class="stat-content">
            <h4>10k Students</h4>
            <p class="mb-0">Gaining 21st-century skills</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-graph-up"></i>
          </div>
          <div class="stat-content">
            <h4>500+ Projects</h4>
            <p class="mb-0">Innovation-driven initiatives</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="bi bi-award"></i>
          </div>
          <div class="stat-content">
            <h4>Awards &amp; Recognition</h4>
            <p class="mb-0">Global acknowledgment for excellence</p>
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
        <span class="about-meta">ABOUT US</span>
        <h2 class="about-title">Transforming Education Through Innovation</h2>
        <p class="about-description">
          ADVISIONS LAB is at the forefront of empowering K-12 schools with skills like STEM, Coding, Robotics, AI, ML, IoT, and more. Our solutions are aligned with the NEP 2020 to foster a future-ready generation.
        </p>
        <div class="row feature-list-wrapper">
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> AI &amp; Robotics Labs</li>
              <li><i class="bi bi-check-circle-fill"></i> Integrated Curriculum</li>
              <li><i class="bi bi-check-circle-fill"></i> Training &amp; Certifications</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> Hands-on STEM Learning</li>
              <li><i class="bi bi-check-circle-fill"></i> AI Connect Platform</li>
              <li><i class="bi bi-check-circle-fill"></i> Learning Management System</li>
            </ul>
          </div>
        </div>
        <div class="info-wrapper">
          <div class="row gy-4">
            <div class="col-lg-5">
              <div class="profile d-flex align-items-center gap-3">
              <img src="/img/avatar-1.webp" alt="CEO Profile" class="profile-image"/>
                <div>
                  <h4 class="profile-name">Mr. Santosh Kumar</h4>
                  <p class="profile-position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-info d-flex align-items-center gap-2">
                <i class="bi bi-telephone-fill"></i>
                <div>
                  <p class="contact-label">Call us anytime</p>
                  <p class="contact-number">+91-8810316395</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6" data-aos="fade-up" data-aos-delay="300">
        <div class="image-wrapper">
          <div class="images position-relative" data-aos="zoom-out" data-aos-delay="400">
          <img src="/img/about-5.webp" alt="Business Meeting" class="img-fluid main-image rounded-4"/>
          <img src="/img/about-2.webp" alt="Team Discussion" class="img-fluid small-image rounded-4"/>
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
          <i class="bi bi-award"></i>
          <h4>Innovative Learning</h4>
          <p>Revolutionizing education through STEM, AI, Robotics, and hands-on learning experiences.</p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div class="feature-box blue">
          <i class="bi bi-patch-check"></i>
          <h4>Certified Programs</h4>
          <p>Empowering students with globally recognized certifications in emerging technologies.</p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
        <div class="feature-box green">
          <i class="bi bi-sunrise"></i>
          <h4>Future-Ready Skills</h4>
          <p>Equipping students with 21st-century skills like Coding, AI, IoT, and Machine Learning.</p>
        </div>
      </div>

      <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
        <div class="feature-box red">
          <i class="bi bi-shield-check"></i>
          <h4>Global Recognition</h4>
          <p>Recognized globally for excellence in STEM and innovation-driven education.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="features-2" class="features-2 section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-center">
      <div class="col-lg-4">
        <div class="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
          <div class="d-flex align-items-center justify-content-end gap-4">
            <div class="feature-content">
              <h3>Interactive Learning</h3>
              <p>Delivering cutting-edge content through our AI-driven platforms and hands-on tools.</p>
            </div>
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-display"></i>
            </div>
          </div>
        </div>

        <div class="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
          <div class="d-flex align-items-center justify-content-end gap-4">
            <div class="feature-content">
              <h3>Innovative Tools</h3>
              <p>Providing advanced tools like Robotics kits and AI platforms to foster creativity.</p>
            </div>
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-gear"></i>
            </div>
          </div>
        </div>

        <div class="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
          <div class="d-flex align-items-center justify-content-end gap-4">
            <div class="feature-content">
              <h3>Dynamic Curriculum</h3>
              <p>Curated educational content aligned with NEP 2020 to prepare future innovators.</p>
            </div>
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-book"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="phone-mockup text-center">
        <img src="/img/phone-app-screen.webp" alt="Phone Mockup" class="img-fluid"/>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-code-square"></i>
            </div>
            <div class="feature-content">
              <h3>AI-Driven Content</h3>
              <p>Personalized learning experiences powered by AI and ML technology.</p>
            </div>
          </div>
        </div>

        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-robot"></i>
            </div>
            <div class="feature-content">
              <h3>Hands-On Robotics</h3>
              <p>Providing engaging robotics projects to stimulate creativity and technical acumen.</p>
            </div>
          </div>
        </div>

        <div class="feature-item" data-aos="fade-left" data-aos-delay="400">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-cloud"></i>
            </div>
            <div class="feature-content">
              <h3>Cloud Integration</h3>
              <p>Seamless cloud-based solutions to enhance collaborative learning and accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="call-to-action" class="call-to-action section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row content justify-content-center align-items-center position-relative">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="display-4 mb-4">Empowering Students for Tomorrow</h2>
        <p class="mb-4">Join us in transforming education and enabling young minds to achieve excellence in STEM, AI, Robotics, and beyond.</p>
        <a href="#contact" class="btn btn-cta">Get Started</a>
      </div>

      <div class="shape shape-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)"></path>
        </svg>
      </div>

      <div class="dots dots-1">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
          </pattern>
          <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
        </svg>
      </div>
    </div>
  </div>
</section>

<section class="py-5 py-xl-8">
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <h2 class="mb-4 display-5 text-center">Offerings to Make Your School Ready for the 21st Century</h2>
      <p class="text-secondary m-4 mb-5 text-center">We offer a comprehensive range of services to equip schools with cutting-edge technologies. Our focus on STEM, Robotics, IoT, and Digital Tools ensures that your institution stays ahead in preparing students for the future.</p>
      <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
    </div>
  </div>
</div>


  <div class="container overflow-hidden">
    <div class="row gy-5 gx-md-5 justify-content-center">
    <div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-gear text-primary" viewBox="0 0 16 16">
                <path d="M9.293 2.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414L9.293 3.707A1 1 0 0 1 9.707 2.293zM6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm7 3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3z" />
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">STEM Education</h4>
            <p class="mb-3 text-secondary">We provide the resources and tools necessary for schools to build strong STEM programs. Equip your students with the skills needed to thrive in the fields of Science, Technology, Engineering, and Mathematics.</p>
            <div>
                <a href="/stemRoboDetails" class="fw-bold text-decoration-none link-primary">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-cogs text-primary" viewBox="0 0 16 16">
                <path d="M9.293 2.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414L9.293 3.707A1 1 0 0 1 9.707 2.293zM6 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm7 3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3z" />
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">Robotics and Automation</h4>
            <p class="mb-3 text-secondary">Our robotics labs offer hands-on experiences for students to learn and experiment with automation, robotics, and AI. Prepare students to engage in the future of technology and engineering.</p>
            <div>
                <a href="/roboticautomation" class="fw-bold text-decoration-none link-primary">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-pc-display text-primary" viewBox="0 0 16 16">
                <path d="M11 0a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h7zm0 1H5v9h6V1z" />
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">AI & Machine Learning</h4>
            <p class="mb-3 text-secondary">Equip your students with the knowledge and skills needed to develop AI-based solutions. Our programs focus on machine learning, deep learning, and practical AI application across various industries.</p>
            <div>
                <a href="/ailab" class="fw-bold text-decoration-none link-primary">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-broadcast text-primary" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                <path d="M6.293 6.293a1 1 0 1 1 1.414 1.414 4 4 0 0 0 5.656 5.656 1 1 0 0 1 1.414-1.414 6 6 0 0 1-8.484-8.484z" />
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">IoT Solutions</h4>
            <p class="mb-3 text-secondary">We provide IoT solutions that connect devices, sensors, and data to create smarter classrooms and campuses. Learn how IoT can improve efficiency, security, and student experience in education.</p>
            <div>
                <a href="/iotSolutions" class="fw-bold text-decoration-none link-primary">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-pen text-primary" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12.854 0.146a1 1 0 0 1 1.414 1.414l-9 9a1 1 0 0 1-.474.263L3.5 9.27a1 1 0 0 1-.263-.474L9.708 1.5l-.708-.708zM2.5 11.146a1 1 0 0 1 0 1.414l3 3a1 1 0 0 1 1.414 0l7-7a1 1 0 0 1 0-1.414l-3-3a1 1 0 0 1-1.414 0l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414l7 7a1 1 0 0 1 0 1.414z" />
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">21st Century Showcase School</h4>
            <p class="mb-3 text-secondary">Our Showcase School program is designed to promote 21st-century skills, including critical thinking, creativity, and collaboration, through innovative learning experiences.</p>
            <div>
                <a href="/showcaseSchool" class="fw-bold text-decoration-none link-primary">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="col-10 col-md-5 col-xl-4 overflow-hidden">
    <div class="row gy-4">
        <div class="col-12 col-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-flask text-primary" viewBox="0 0 16 16">
                <path d="M8 0C7.447 0 7 0.447 7 1V7H3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-4V1C9 0.447 8.553 0 8 0zM7 7h2V3H7v4zM7.75 15.25a.25.25 0 0 1-.5 0v-1h2v1a.25.25 0 0 1-.5 0h-1a.25.25 0 0 1-.25-.25h2.5a.25.25 0 0 1-.25.25h-1zm1.5-1v-1h2v1a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25zM8 15.5V12a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5zm2.5-5.5a1 1 0 0 0-1 1V6a.5.5 0 0 0 .5-.5h1V4h1.5c.4 0 .5.3.5.5v1H8.5V8H7V7.5h1.5z"/>
            </svg>
        </div>
        <div class="col-12 col-lg-10">
            <h4 class="mb-3">Pre-Tinkering Lab</h4>
            <p class="mb-3 text-secondary">The Pre-Tinkering Lab is designed for younger students to explore hands-on STEM concepts and develop problem-solving skills using creative tools and projects.</p>
            <div>
                <a href="/pretinkeringlab" class="fw-bold text-decoration-none link-primary">
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
  </div>
</section>




<section id="testimonials" className="testimonials section light-background">

  <div className="container section-title" data-aos="fade-up">
    <h2>What Our Students Say</h2>
    <p>Discover how AdvisionsLab has empowered students to innovate and achieve their dreams.</p>
  </div>

  <div className="container">

    <div className="row g-5">

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonial-item">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="testimonial-img" alt="Aryan Singh"/>
          <h3>Aryan Singh</h3>
          <h4>High School Student</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            "AdvisionsLab opened my eyes to the possibilities in robotics. The hands-on experience was incredible!"
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div className="testimonial-item">
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="testimonial-img" alt="Riya Patel"/>
          <h3>Riya Patel</h3>
          <h4>Engineering Aspirant</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            "I never thought learning AI and robotics could be this exciting! AdvisionsLab made it possible."
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div className="testimonial-item">
          <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="testimonial-img" alt="Karthik Nair"/>
          <h3>Karthik Nair</h3>
          <h4>Middle School Innovator</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            "Building my first robot with AdvisionsLab was an unforgettable experience. It’s a dream come true!"
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div className="testimonial-item">
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="testimonial-img" alt="Ananya Verma"/>
          <h3>Ayush Verma</h3>
          <h4>Future Scientist</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            "AdvisionsLab taught me to think creatively and solve real-world problems. I now feel ready to tackle any challenge."
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

<section className="faq-9 faq section" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
          <h2 class="faq-title">Have a question? Check out the FAQ</h2>
            <p class="faq-description">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
            <div class="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
              <svg class="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className={`faq-content ${activeIndex === index ? "show" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                  <i className={`faq-toggle bi ${activeIndex === index ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
                </div>
              ))}
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
          <a className="cta-btn" href="/roboticsDetails">
            Our Products
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


  </main>

  <Footer/>
</div>
  )
}

export default StemRobo