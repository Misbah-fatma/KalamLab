import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";


const Projects = () => {
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
    return(
        <div> 
        <Navbar/>
         <main class="main">

         <section id="hero" class="hero section light-background">

<img src="https://www.robotlab.com/hubfs/AI-Classroom.jpg" alt="Robotics Education Background" data-aos="fade-in"/>

<div class="container position-relative">

  <div class="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
    <h2 className="text-white">WELCOME TO ADVISIONSLAB</h2>
    <p className="text-white">Empowering the next generation with robotics, AI, and hands-on innovation.</p>
  </div>

  <div class="content row gy-4">
    <div class="col-lg-4 d-flex align-items-stretch">
      <div class="why-box" data-aos="zoom-out" data-aos-delay="200">
        <h3>Why Learn Robotics with Us?</h3>
        <p>
          At ADVISIONSLAB, we inspire young minds to explore the world of robotics through engaging, hands-on learning experiences. From designing robots to programming them for real-world tasks, our curriculum fosters creativity, critical thinking, and problem-solving skills in children.
        </p>
        <div class="text-center">
          <a href="/robotics" class="more-btn"><span>Learn More</span> <i class="bi bi-chevron-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-lg-8 d-flex align-items-stretch">
      <div class="d-flex flex-column justify-content-center">
        <div class="row gy-4">

          <div class="col-xl-4 d-flex align-items-stretch">
            <div class="icon-box" data-aos="zoom-out" data-aos-delay="300">
              <i class="bi bi-gear"></i>
              <h4>Hands-On Learning</h4>
              <p>Students get to build and program robots, gaining practical experience in robotics and engineering concepts.</p>
            </div>
          </div>

          <div class="col-xl-4 d-flex align-items-stretch">
            <div class="icon-box" data-aos="zoom-out" data-aos-delay="400">
              <i class="bi bi-code-slash"></i>
              <h4>Integrated Coding Skills</h4>
              <p>We teach coding fundamentals alongside robotics, enabling children to bring their robotic creations to life.</p>
            </div>
          </div>

          <div class="col-xl-4 d-flex align-items-stretch">
            <div class="icon-box" data-aos="zoom-out" data-aos-delay="500">
              <i class="bi bi-lightbulb"></i>
              <h4>Future-Ready Skills</h4>
              <p>Our programs prepare students with the skills they need to excel in technology-driven careers of tomorrow.</p>
            </div>
          </div>

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
          ADVISIONS LAB empowers K-12 students to develop future-ready skills through hands-on projects in STEM, Coding, Robotics, AI, ML, IoT, and more. Aligned with NEP 2020, our programs inspire creativity and critical thinking in young learners.
        </p>
        <div class="row feature-list-wrapper">
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> Build a Smart Home Model with IoT</li>
              <li><i class="bi bi-check-circle-fill"></i> Create Chatbots using AI</li>
              <li><i class="bi bi-check-circle-fill"></i> Design and Program Robots</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="feature-list">
              <li><i class="bi bi-check-circle-fill"></i> Develop Mobile Apps</li>
              <li><i class="bi bi-check-circle-fill"></i> Conduct Real-Time Data Analysis</li>
              <li><i class="bi bi-check-circle-fill"></i> Explore Space Science Projects</li>
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
          <img src="https://lamarr-institute.org/wp-content/uploads/KNN-OpenRoberta-Quelle-insta-photos-stock-adobe-comFraunhofer-IAIS-1024x683.jpg" alt="Children Building Projects" class="img-fluid main-image rounded-4"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1riM-DRq0XcXfQStxuIu71C73vYd1T0plQ&s" alt="Students Collaborating" class="img-fluid small-image rounded-4"/>
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

  
  <section id="about" class="about section m-8">
    <div class="container p-4" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 align-items-center justify-content-between">
     
        <div class="col-xl-12">
          <div class="image-wrapper">
            <div class="images position-relative">
            <img src="https://www.stemrobo.com/wp-content/uploads/2023/10/CIC-2048x950.jpg" alt="Business Meeting" class="img-fluid main-image rounded-4"/>
          
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
    <div id="featuresCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        
     
        <div class="carousel-item active" data-aos="zoom-in" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-xl-3 col-md-6">
              <div class="feature-box orange">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-4.jpeg" alt="Innovation" class="feature-img img-fluid"/>
                
                <h4 className="mt-4">Preparing Students for Technological Change</h4>
                <p>Preparing students for a rapidly changing technological world through hands-on learning and innovation.</p>
              </div>
            </div>

           
            <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="feature-box blue">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/07/2.jpg" alt="Creative Thinking" class="img-fluid feature-img"/>
               
                <h4 className="mt-4">Creative Thinkers & Problem Solvers</h4>
                <p>Empowering kids to become creative thinkers and problem solvers through STEM and tech-driven education.</p>
              </div>
            </div>

          
            <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="feature-box green">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/07/3-scaled.jpg" alt="End-to-End Solution" class="img-fluid feature-img"/>
             
                <h4 className="mt-4">End-To-End Solutions for Schools</h4>
                <p>Providing integrated end-to-end solutions for schools aligned with NEP 2020, fostering innovation and future readiness.</p>
              </div>
            </div>

           
            <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div class="feature-box red">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/07/4.jpg" alt="Innovation Skills" class="feature-img img-fluid"/>
              
                <h4 className="mt-4">Equipping with Innovation & Skills</h4>
                <p>Equipping kids with 21st-century skills and innovation, preparing them to lead in the modern tech world.</p>
              </div>
            </div>
          </div>
        </div>

    
        <div class="carousel-item" data-aos="zoom-in" data-aos-delay="500">
          <div class="row gy-4">
            <div class="col-xl-3 col-md-6">
              <div class="feature-box orange">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/07/4.jpg" alt="Technological Change" class="feature-img img-fluid"/>
               
                <h4 className="mt-4">Preparing Students for Technological Change</h4>
                <p>Preparing students for a rapidly changing technological world through hands-on learning and innovation.</p>
              </div>
            </div>

          
            <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="600">
              <div class="feature-box blue">
                <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-4.jpeg" alt="Creative Thinkers" class="feature-img img-fluid"/>
               
                <h4 className="mt-4">Creative Thinkers & Problem Solvers</h4>
                <p>Empowering kids to become creative thinkers and problem solvers through STEM and tech-driven education.</p>
              </div>
            </div>

            
            <div class="col-xl-3 col-md-6">
              <div class="feature-box orange">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6cUooVQ86JwgSnUoclrynoNb7vuvZrJosg&s" alt="STEM Integration" class="feature-img"/>
               
                <h4 className="mt-4">Preparing Future Innovators</h4>
                <p>Fostering STEM integration to prepare students for future careers in emerging technologies.</p>
              </div>
            </div>

        
            <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="800">
              <div class="feature-box blue">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKa9zNgPAXPzzpWW0Mrecii_HrwdiE4SQUCq8S4F66G5Q57kLhgg5hTde_z_J37jsVK4&usqp=CAU" alt="Technology Leaders" class="feature-img"/>
             
                <h4 className="mt-4">Future-Ready Skills</h4>
                <p>Equipping students with critical 21st-century skills to be leaders in the evolving technology landscape.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
 
      <button class="carousel-control-prev" type="button" data-bs-target="#featuresCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#featuresCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>


<section class="py-5 py-xl-8 mb-4 bg-primary">
  <div class="container-fluid mb-4">
    <div class="row mb-4">
      <h2 class="mb-4 display-5 text-center text-white mt-4">ADVISIONSLAB – Core Competencies</h2>
    </div>
    <div class="container">
      <div class="row">
      
        <div class="col-md-4 mb-4">
          <div class="image-wrapper">
            <img src="https://scx2.b-cdn.net/gfx/news/hires/anenglishtea.jpg" alt="STEM Education" class="zoom-image img-fluid" />
            <div class="overlay">
            
              <p>We specialize in creating hands-on STEM programs that promote critical thinking, problem-solving, and creativity among students. Our approach encourages exploration and discovery in subjects like coding, robotics, and engineering.</p>
            </div>
          </div>
        </div>

     
        <div class="col-md-4 mb-4">
          <div class="image-wrapper">
            <img src="https://i.pinimg.com/736x/8a/b9/30/8ab930eaf1c17a830bc79554d0d11386.jpg" alt="AI & Robotics" class="zoom-image img-fluid" />
            <div class="overlay">
           
              <p>We provide students with the tools and knowledge to create robots and integrate artificial intelligence, enhancing their technical skills for the future. Our curriculum is designed to introduce children to cutting-edge technologies in a fun and accessible way.</p>
            </div>
          </div>
        </div>

       
        <div class="col-md-4 mb-4">
          <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YDrD6x3dl0bspG0m76NZ-nDfhjc37_4Bpg&s" alt="Future-Ready Skills" class="zoom-image img-fluid" />
            <div class="overlay">
           
              <p>Through hands-on projects in IoT, machine learning, and more, we help students develop future-ready skills that will prepare them for success in the digital world. Our focus is on fostering problem-solving abilities and innovation.</p>
            </div>
          </div>
        </div>

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
  
  
  
  
  <div className="container mt-5">
  
    <h3 className="text-primary mb-4 text-center">
      KITS WITH INTEGRATED CURRICULUM FOR AI & IoT LAB
    </h3>
  
    <div className="row">
  
      <div className="col-12 col-sm-6 col-md-3 mb-4">
        <img
          src="https://www.stemrobo.com/wp-content/uploads/2023/08/robotic-kit.jpg"
          alt="AI & IoT 1"
          className="img-fluid rounded shadow"
        />
      </div>
  
      <div className="col-12 col-sm-6 col-md-3 mb-4">
        <img
          src="https://www.stemrobo.com/wp-content/uploads/2023/08/stem-paper-circuit.jpg"
          alt="AI & IoT 2"
          className="img-fluid rounded shadow"
        />
      </div>
  
      <div className="col-12 col-sm-6 col-md-3 mb-4">
        <img
          src="https://www.stemrobo.com/wp-content/uploads/2023/08/Aurdino-robotic-kit.jpg"
          alt="AI & IoT 3"
          className="img-fluid rounded shadow"
        />
      </div>
  
      <div className="col-12 col-sm-6 col-md-3 mb-4">
        <img
          src="https://www.stemrobo.com/wp-content/uploads/2023/08/stembot.jpg"
          alt="AI & IoT 4"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>

  
  <section class="bg-light py-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7">
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
export default Projects;
