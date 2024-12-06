import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { addCart } from "../../redux/cart/cartAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { TextField, Button, Typography, Grid, Box, Modal } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const state = useSelector(state => state.cart);
  let componentMounted = true;

  const dispatch = useDispatch();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const showModal = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axiosInstance.post('/data-courses');
      if (componentMounted) {
        setData(await response.data.data);
        setFilter(await response.data.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { loading1, error, courses, message } = useSelector(
    (state1) => state1.course
  );

  const categories = [
    "All",
    "Web development",
    "App development",
    "Data Science",
    "Artificial intelligence",
    "Machine learning",
  ];

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
  }, [category, keyword, error, message]);

  const Loading = () => {
    return (
      <>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton height={300} />
          </Grid>
        ))}
      </>
    );
  };

  const filterProducts = () => {
    return filter.filter((product) => {
      // Match the selected category or show all if 'All' is selected
      const matchesCategory =
        category === "" || product.type === category;
  
      // Match the search query
      const matchesSearch = product.courseName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
  
      return matchesCategory && matchesSearch;
    });
  };
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const ShowProducts = () => {
    const filteredProducts = filterProducts();
  
    return (
      <>
      
                 <section class="course-section spad pb-0">
		<div class="course-warp container">
    <div className="row course-items-area">
  {filteredProducts.map((product) => (
    <div
      className="mix col-lg-4 col-md-4 col-sm-6 finance"
      key={product._id}
    >
      <div className="course-item">
        <div
          className="course-thumb set-bg"
          style={{ backgroundImage: `url(${product.courseThumbnail})` }}
          aria-label="Course thumbnail"
        >
          <div className="price text-white">Price: ₹{product.coursePrice}</div>
        </div>

        <div className="course-info">
          <div className="course-text">
            <Typography variant="h5">{product.courseName}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mt-2"
            >
              {product.courseDescription}
            </Typography>
          </div>
          <Box p={2} display="flex" justifyContent="space-between">
            <Link
              to={`/courseDetails/${product._id}`}
              className="btn-get-started animated fadeInUp scrollto"
            >
              Read More
            </Link>
            {userData ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </Button>
            ) : (
              <Link to="/login">Add To Cart</Link>
            )}
          </Box>
        </div>
      </div>
    </div>
  ))}
</div>


<div className="featured-courses">
      {/* First Featured Course */}
      <div className="featured-course course-item">
        <div
          className="course-thumb set-bg"
          style={{ backgroundImage: `url('https://www.freecodecamp.org/news/content/images/2024/05/cover-img.jpg')` }}
        >
          <div className="price text-white">Price: 1000</div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-6 pl-0">
            <div className="course-info">
              <div className="course-text">
                <div className="fet-note bg-primary">Featured Course</div>
                <h5>HTML5 & CSS for Beginners</h5>
                <p>
                  Master the basics of web development with this comprehensive
                  course on HTML5 and CSS. Build interactive websites from scratch
                  and learn the essential skills needed to create stunning
                  designs. Whether you're a complete beginner or refreshing your
                  knowledge, this course is perfect for you.
                </p>
                <div className="students text-primary">120 Students</div>
              </div>
              <div className="course-author">
                <div
                  className="ca-pic set-bg"
                  style={{ backgroundImage: `url('/assets/img/santosh.jpeg')` }}
                ></div>
                <p>Mr. Santosh Kumar, <span>Developer</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Featured Course */}
      <div className="featured-course course-item">
  <div
    className="course-thumb set"
    style={{ backgroundImage: `url('https://res.cloudinary.com/doacfe6uo/image/upload/v1727980220/lgfe8wchwea2amxsm715.png')`}}
  >
    <div className="price text-white">Price: 5000</div>
  </div>
  <div className="row">
    <div className="col-lg-6 pr-0">
      <div className="course-info">
        <div className="course-text">
          <div className="fet-note bg-primary text-white">Featured Course</div>
          <h5>AI for Schools</h5>
          <p>
            Learn the basics of Artificial Intelligence and how it can be applied
            in education. This course will guide teachers and students through
            the fundamentals of AI, its applications in classrooms, and how AI
            tools can enhance learning and administrative processes.
          </p>
          <div className="students text-primary">150 Students</div>
        </div>
        <div className="course-author">
          <div
            className="ca-pic set-bg"
            style={{ backgroundImage: `url('/assets/img/santosh.jpeg')` }}
          ></div>
          <p>Mr. Santosh Kumar, <span>AI Specialist</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>

           </div>
                 
</section>

<section className="banner-section spad">
  <div className="container">
    <div className="section-title mb-0 pb-2">
      <h2>Join Our Learning Community Today!</h2>
      <p>
        Unlock access to a wide range of courses designed to help you grow and
        succeed. Whether you're a student, educator, or professional, our platform
        offers personalized learning paths, expert-led courses, and interactive
        tools to help you achieve your goals.
      </p>
    </div>
    <div className="text-center pt-5">
      <a href="/register" className="site-btn bg-primary">Register Now</a>
    </div>
  </div>
</section>

                  
      </>
    );
  };
  

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <Navbar />
      {/* <div className="section-title">
  <h1>Explore Our Course </h1>
  <p className="mt-4">
    Discover a variety of course categories designed to help you expand your
    knowledge and skills. Whether you're looking to advance in your career,
    explore new interests, or improve your expertise, our platform offers
    courses across a wide range of subjects including technology, business,
    arts, and more.
  </p>
</div> */}
    <div
      className="page-info-section set-bg"
      style={{ backgroundImage: 'url(/img/4.jpg)' }}
    >
      <div className="container">
        <div className="site-breadcrumb">
          <a href="#">Home</a>
          <span>Courses</span>
        </div>
      </div>
    </div>

    <section class="search-section ss-other-page">
		<div class="container">
			<div class="search-warp">
				<div class="section-title text-white">
					<h2><span>Search your course</span></h2>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
				
						<form class="course-search-form">
							<input type="text" placeholder="Course"/>
							<input type="text" class="last-m" placeholder="Category"/>
							<button class="site-btn btn-dark">Search Couse</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
      <Box>
    




        <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
          {categories.map((item, index) => (
    <Button
    key={item}
    color={activeTab === index ? "primary" : "secondary"}
    onClick={() => {
      setCategory(item === "All" ? "" : item);
      setActiveTab(index);
    }}
    sx={{ margin: 1 }}
  >
    {item}
  </Button>
  
          ))}
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4} justifyContent="center">
          {loading ? <Loading /> : <ShowProducts />}
        </Grid>
      </Box>
<Footer/>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          bgcolor="background.paper"
          borderRadius={1}
          boxShadow={24}
          p={4}
          width={400}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {selectedProduct?.courseName}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedProduct?.popUpText}
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={toggleModal} color="primary" variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Products;
