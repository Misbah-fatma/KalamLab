import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const GalleryPage = () => {

  const [posts, setPosts] = useState([]);
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
 
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


    return (
        <div>
<Navbar/>

<section class="py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our Work</h3>
        <h2 class="display-5 mb-4 mb-md-5 text-center">Here is our company's latest news about our daily work.</h2>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0">
    {posts.map((slide, index) => (
      <div class="col-4 col-lg-4">
        <article>
          <div class="card border-0">
       
            <>
            <figure class="card-img-top m-0 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img class="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={slide.imageUrl}alt="Business" />
              </a>
             
            </figure><div class="card-body border bg-white p-4">
                <div class="entry-header mb-3">
                  <ul class="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a class="link-primary text-decoration-none" href="#!">Business</a>
                    </li>
                  </ul>
                  <h2 class="card-title entry-title h4 mb-0">
                    <a class="link-dark text-decoration-none" href="#!">{slide.title}</a>
                  </h2>
                </div>
                <p class="card-text entry-summary text-secondary">{slide.description}
                </p>
              </div><div class="card-footer border border-top-0 bg-white p-4">
                <ul class="entry-meta list-unstyled d-flex align-items-center m-0">
                  <li>
                    <a class="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <span class="ms-2 fs-7">7 Feb 2023</span>
                    </a>
                  </li>
                  <li>
                    <span class="px-3">&bull;</span>
                  </li>
                  <li>
                    <a class="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      <span class="ms-2 fs-7">55</span>
                    </a>
                  </li>
                </ul>
              </div>
              </>
     
          </div>
        </article>
      </div>
         ))}
    </div>
  </div>
</section>
<Footer/>
        </div>
    );
    };

    export default GalleryPage;