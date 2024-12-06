import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  Input,
  TextField,
  Grid,
  Select,
  MenuItem,
  Container,
  Typography,
  Card
} from '@mui/material';
import Sidebar from '../SideBar';

function StudentDetails() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    description: '',
    links: [''],
    identityVerifications: [''],
    phoneNumber: '',
    schoolId: '',
    schoolName: '',
    studentClass: '',
  });
  const [userData, setUserData] = useState(null);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axiosInstance.get('/schoolRegistration/list');
        setSchools(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schools:', error);
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameArray = name.split('.');
    if (nameArray.length > 1) {
      const [parent, child] = nameArray;
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...formData.links];
    newLinks[index] = e.target.value;
    setFormData({ ...formData, links: newLinks });
  };

  const addLinkField = () => {
    setFormData({ ...formData, links: [...formData.links, ''] });
  };

  const handleIdentityChange = (index, e) => {
    const newIdentities = [...formData.identityVerifications];
    newIdentities[index] = e.target.value;
    setFormData({ ...formData, identityVerifications: newIdentities });
  };

  const addIdentityField = () => {
    setFormData({
      ...formData,
      identityVerifications: [...formData.identityVerifications, ''],
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userData._id;
      await axiosInstance.put(`/auth/details/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert("Details added.");

    } catch (error) {
      console.error('There was an error sending the request:', error);
    }
  };

  return (
    <div>
   <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
   <div className="app-main">
          <Sidebar />
          <div className="col mt-4">
          <div className="row">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Enrollment</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12 mb-3">
              <Card className="mb-5">
              <Box overflow="auto">
          <Container maxWidth="xl" >
            <Box  mt={4}>
              <form onSubmit={handleSubmit}>
                {userData ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="User Name"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Street"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="State"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="ZIP"
                        name="address.zip"
                        value={formData.address.zip}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Typography variant="body1">Links</Typography>
                        {formData.links.map((link, index) => (
                          <TextField
                            key={index}
                            fullWidth
                            margin="dense"
                            value={link}
                            onChange={(e) => handleLinkChange(index, e)}
                          />
                        ))}
                        <Button onClick={addLinkField}>Add Link</Button>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Typography variant="body1">Identity Verifications</Typography>
                        {formData.identityVerifications.map((identity, index) => (
                          <TextField
                            key={index}
                            fullWidth
                            margin="dense"
                            value={identity}
                            onChange={(e) => handleIdentityChange(index, e)}
                          />
                        ))}
                        <Button onClick={addIdentityField}>Add Identity</Button>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button  variant="contained" color="primary" type="submit" className='mb-4'>
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <p>Loading...</p>
                )}
              </form>
            </Box>
          </Container>
          </Box>
          </Card>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
