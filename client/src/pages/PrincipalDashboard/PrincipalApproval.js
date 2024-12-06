import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CircularProgress, 
  Grid, 
  Box, 
  Snackbar 
} from '@mui/material';
import SideBar from './SideBar';

function PrincipalApproval() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const email = userData?.email;
  const userid = userData?._id;

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axiosInstance.get('/schoolRegistration/list');
        const schoolsData = response.data;
        const school = schoolsData.find((school) => school.Principal_email === email);

        if (school) {
          setSchoolName(school.school_name);
        }
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, [email]);

  console.log(schoolName)

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/auth/pending-requests');
        setPendingRequests(response.data);
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleApproval = async (requestId, approve) => {
    try {
      await axiosInstance.post(`/auth/${approve ? 'approve' : 'reject'}`, { requestId });
      setSnackbarMessage(`Request ${approve ? 'approved' : 'rejected'} successfully.`);
      setSnackbarOpen(true);
      setPendingRequests((prevRequests) => prevRequests.filter((req) => req._id !== requestId));
    } catch (error) {
      console.error(`Error ${approve ? 'approving' : 'rejecting'} request:`, error);
    }
  };

  // Filter pending requests by schoolName
  const filteredRequests = pendingRequests.filter(
    (request) => request.schoolId?.school_name === schoolName
  );

  console.log(pendingRequests)

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <SideBar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="/">Plans</a></li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="main-card card d-flex h-100 flex-column">
                  <div className="card-body">
                    <Container>
                      {loading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                          <CircularProgress />
                        </Box>
                      ) : (
                        <Grid container spacing={3}>
                          {filteredRequests.length === 0 ? (
                            <Typography>No pending requests</Typography>
                          ) : (
                            filteredRequests.map((request) => (
                              <Grid item xs={12} md={6} lg={4} key={request._id}>
                                <Card>
                                  <CardContent>
                                    <Typography variant="h6">User: {request.userId?.userName}</Typography>
                                    <Typography variant="subtitle1">School: {request.schoolId?.school_name || 'No school associated'}</Typography>
                                    <Box mt={2}>
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleApproval(request._id, true)}
                                        sx={{ mr: 2 }}
                                      >
                                        Approve
                                      </Button>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleApproval(request._id, false)}
                                      >
                                        Reject
                                      </Button>
                                    </Box>
                                  </CardContent>
                                </Card>
                              </Grid>
                            ))
                          )}
                        </Grid>
                      )}
                    </Container>
                    <Snackbar
                      open={snackbarOpen}
                      autoHideDuration={6000}
                      onClose={() => setSnackbarOpen(false)}
                      message={snackbarMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalApproval;
