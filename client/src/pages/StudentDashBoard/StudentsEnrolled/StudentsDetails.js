import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
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
   
    studentClass: '',
  });
  const [userData, setUserData] = useState(null);
  const [schools, setSchools] = useState([]);
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
      } catch (error) {
        console.error('Error fetching schools:', error);
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


  const handleNotify = async () => {
    try {
      const school = schools.find((school) => school._id === formData.schoolId);
console.log(school)
      await axiosInstance.post('/auth/notify', {
        userId: userData._id,
        schoolId: school._id,
        schoolName: school.school_name,
      });

      alert('Request sent for approval.');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userData._id;

      await axiosInstance.put(`/auth/details/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Details saved successfully.');
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  return (
    <div>
      <div
        className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
        id="appContent"
      >
        <div className="app-main">
          <Sidebar />
          <div className="col mt-4">
            <Container maxWidth="xl">
              <form onSubmit={handleSubmit}>
                <Card className="mb-5">
                  <Box p={4}>
                    <Typography variant="h5" gutterBottom>
                      Student Details
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="User Name"
                          name="userName"
                          value={formData.userName || userData?.userName || ''}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          value={formData.email || userData?.email || ''}
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
                      <FormControl fullWidth>
                        <Select
                          name="studentClass"
                          value={formData.studentClass}
                          onChange={handleChange}
                          displayEmpty
                        >
                          <MenuItem value="">
                            <em>Select Class</em>
                          </MenuItem>
                          {[...Array(12).keys()].map((num) => (
                            <MenuItem key={num + 1} value={num + 1}>
                              {num + 1}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                        </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                          Save Details
                        </Button>
                      </Grid>
                    
                    </Grid>
                  </Box>
                </Card>

                <Card className="mb-5">
                  <Box p={4}>
                    <Typography variant="h5" gutterBottom>
                      School Selection
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        value={formData.schoolId}
                        onChange={(e) => {
                          const selectedSchool = schools.find(
                            (school) => school._id === e.target.value
                          );
                          setFormData({
                            ...formData,
                            schoolId: selectedSchool?._id || '',
                            schoolName: selectedSchool?.school_name || '',
                          });
                        }}
                        displayEmpty
                      >
                        <MenuItem value="">
                          <em>Select School</em>
                        </MenuItem>
                        {schools.map((school) => (
                          <MenuItem key={school._id} value={school._id}>
                            {school.school_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box mt={2}>
                      <Button variant="contained" color="secondary" onClick={handleNotify}>
                        Notify School
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </form>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
