import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Card, Button, Typography, Grid, Box, Modal } from "@mui/material";
import Navbar from "../LandingPage/Navbar";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart/cartAction";
import { useNavigate } from "react-router-dom";

const Kits = () => {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedKit, setSelectedKit] = useState(null);
  const [userData, setUserData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const dispatch = useDispatch();



  // Fetch kits from API
  useEffect(() => {
    const fetchKits = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/kits/details");
        setKits(response.data);
      } catch (error) {
        console.error("Error fetching kits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKits();
  }, []);

  // Fetch user data from localStorage
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  // Filter kits based on search query
  const filterKits = () => {
    if (!kits || kits.length === 0) {
      return [];
    }
    return kits.filter((kit) =>
      kit.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addKitToCart = (kit) => {
    dispatch(addCart(kit)); // Add to Redux cart state
    toast.success(`${kit.name} added to cart!`);
  };

  const handleOpenModal = (kit) => {
    setSelectedKit(kit);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedKit(null);
  };

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

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

  const ShowKits = () => {
    const filteredKits = filterKits();

    if (filteredKits.length === 0) {
      return <Typography variant="h6">No kits found.</Typography>;
    }

    return (
      <>
        {filteredKits.map((kit) => (
          <Grid item xs={12} sm={6} md={4} key={kit._id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <img
                src={kit.image}
                alt={kit.name}
                style={{ width: "100%", height: "270px" }}
              />
              <Box p={2} flexGrow={1}>
                <Typography variant="h5">{kit.name}</Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {kit.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography variant="body2" color="textSecondary">
                    Creator - {kit.teacher?.userName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <b>Price: </b>₹{kit.price}
                  </Typography>
                </Box>
              </Box>
              <Box p={2} display="flex" justifyContent="space-between">
                <Button
                  variant="text"
                  onClick={() => window.open(kit.pdf)}
                  className="btn-get-started"
                >
           
                  Read More
                </Button>
                {userData ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => addKitToCart(kit)}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Link to="/login" className="btn btn-primary">
                    Login to Add
                  </Link>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Advisions LMS - Kits</title>
        <meta name="description" content="Browse and purchase educational kits." />
      </Helmet>
      <Navbar />
      <Box p={4}>
        <Typography variant="h3" align="center" gutterBottom>
          All Kits
        </Typography>
        <Box display="flex" alignItems="center" mb={2} m={4}>
          <BsSearch color="gray.300" />
          <input
            type="text"
            className="form-control mx-2"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search a kit ..."
          />
        </Box>
      </Box>
      <Box p={4}>
        <Grid container spacing={4} justifyContent="center">
          {loading ? <Loading /> : <ShowKits />}
        </Grid>
      </Box>

      {/* <Modal
  open={modalOpen}
  onClose={handleCloseModal}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
>
  <Box bgcolor="background.paper" borderRadius={1} boxShadow={24} p={4} width={1000}>
    <Typography id="modal-title" variant="h6">
      {selectedKit?.name}
    </Typography>
    
    {selectedKit?.pdf ? (
      <Document
        file={selectedKit.pdf}  // Cloudinary URL for the PDF
        onLoadSuccess={onLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF", error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    ) : (
      <Typography>No PDF available for this kit.</Typography>
    )}

    <Box mt={2} display="flex" justifyContent="flex-end">
      <Button onClick={handleCloseModal} variant="contained">
        Close
      </Button>
    </Box>
  </Box>
</Modal> */}

    </>
  );
};

export default Kits;
