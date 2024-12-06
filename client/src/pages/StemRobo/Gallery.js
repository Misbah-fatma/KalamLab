import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";


const Gallery = () => {

    return(
        <>
        <Navbar />

        <section id="call-to-action" class="call-to-action section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row content justify-content-center align-items-center position-relative">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="display-4 mb-4">Image Gallery</h2>
        <p class="mb-4">Explore our curated collection of stunning visuals, thoughtfully displayed in this gallery. Each image captures a unique moment, offering a glimpse into the vibrant stories and emotions that inspire us every day</p>
       
      </div>
</div>
</div>
</section>
   
        <div class="container">


            <div class="row">
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-43.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-2.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-4.jpeg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-67.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-14.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-19.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-22-scaled.jpg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-26.jpeg" alt="" class="fluid img-thumbnail" />
                </div>
                <div class="col-sm-6 col-md-4 mb-3">
                    <img src="https://www.stemrobo.com/wp-content/uploads/2023/08/1-37.jpeg" alt="" class="fluid img-thumbnail" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
       
    )
}

export default Gallery;
