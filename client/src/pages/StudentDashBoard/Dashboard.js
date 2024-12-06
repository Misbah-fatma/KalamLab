import React, { useEffect, useState } from "react";
import Sidebar from './SideBar';
import axios from "axios";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { TablePagination, Paper, Card } from "@mui/material";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Student = ({ studentId }) => {
  const styles = {
    card: {
      marginBottom: '2rem',
    },
    cardBody: {
      padding: '1.5rem',
    },
    table: {
      width: '100%',
      marginBottom: '1rem',
      color: '#212529',
      textAlign: 'center',
    },
    thead: {
      backgroundColor: '#f8f9fa',
    },
    th: {
      padding: '1rem',
      verticalAlign: 'top',
      borderTop: '1px solid #dee2e6',
    },
    tbody: {
      backgroundColor: '#fff',
    },
    tr: {
      borderTop: '1px solid #dee2e6',
    },
    td: {
      padding: '1rem',
      verticalAlign: 'top',
      borderTop: '1px solid #dee2e6',
    },
    badge: {
      display: 'inline-block',
      padding: '.35em .65em',
      fontSize: '75%',
      fontWeight: '700',
      lineHeight: '1',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      borderRadius: '.25rem',
      backgroundColor: '#007bff',
      color: '#fff',
    },
    progress: {
      height: '1rem',
      overflow: 'hidden',
      fontSize: '.75rem',
      backgroundColor: '#e9ecef',
      borderRadius: '.25rem',
    },
    progressBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundColor: '#007bff',
      transition: 'width .6s ease',
    },
    linkButton: {
      display: 'inline-block',
      fontWeight: '400',
      color: '#007bff',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      userSelect: 'none',
      backgroundColor: '#007bff',
      border: '1px solid #007bff',
      padding: '.375rem .75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '.25rem',
      textDecoration: 'none',
      color: '#fff',
    },
    rowHover: {
      '&:hover': {
        backgroundColor: '#f2f2f2',
      },
    },
  };

  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const userId = userData ? userData._id : null;
  const username = userData?.userName;
  const activity = userData?.role;
  const email = userData?.email;

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage);

    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axiosInstance.get("/api/code", {
          headers: {
            Authorization: "Bearer " + token,
          }
        });
        setData(response.data.codes);
      } catch (error) {
        console.error("Error fetching codes:", error);
      }
    };

    fetchCodes();
  }, []);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axiosInstance.get("/api/purchased-courses", {
          headers: {
            Authorization: "Bearer " + token,
          }
        });

        console.log('Purchased courses response:', response.data); 

        setPurchasedCourses(response.data.courses.flat());
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      }
    };

    if (userId) {
      fetchPurchasedCourses();
    }
  }, [userId]);

  const getStatus = (output) => {
    if (!output) return "No Output";
    if (/error/i.test(output)) return "Error";
    return "Success";
  };

  const [roomCount, setRoomCount] = useState(null);
  const fetchRoomCount = async (userId) => {
    try {
      const response = await axiosInstance.get(`/room/api/rooms/count?userId=${userId}`);
      setRoomCount(response.data.count);
    } catch (error) {
      console.error('Error fetching room count:', error);
      setRoomCount(null);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRoomCount(userId);
    }
  }, [userId]);

  const outputStatusData = data.reduce((acc, row) => {
    const status = getStatus(row.output);
    if (!acc[status]) {
      acc[status] = 0;
    }
    acc[status]++;
    return acc;
  }, {});

  const userCodeCount = data.reduce((acc, row) => {
    if (!acc[row.user]) {
      acc[row.user] = 0;
    }
    acc[row.user]++;
    return acc;
  }, {});

  const languageCount = data.reduce((acc, row) => {
    if (!acc[row.language]) {
      acc[row.language] = 0;
    }
    acc[row.language]++;
    return acc;
  }, {});

  const outputStatusChartData = {
    labels: Object.keys(outputStatusData),
    datasets: [
      {
        label: 'Output Status',
        data: Object.values(outputStatusData),
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const userCodeCountChartData = {
    labels: Object.keys(userCodeCount),
    datasets: [
      {
        label: 'Number of Codes',
        data: Object.values(userCodeCount),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: Object.keys(outputStatusData),
    datasets: [
      {
        label: 'Output Status',
        data: Object.values(outputStatusData),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Number of Codes',
        data: Object.values(userCodeCount),
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  const languageCountChartData = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        label: 'Number of Languages Used',
        data: Object.values(languageCount),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  function truncateText(text, wordLimit) {
    if (!text) return ''; // Return an empty string if text is undefined or null
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [liveClasses, setLiveClasses] = useState([]);

  useEffect(() => {
    const fetchLiveClasses = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axiosInstance.get(`/live-classes/student/${studentId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            }
          }
        );
        setLiveClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLiveClasses();
  }, [studentId]);

  const courses = purchasedCourses.filter((item) => item.type === "Course");
  const kits = purchasedCourses.filter((item) => item.type === "Kit");
  
  

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Details</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="row" id="outputStatusTable">
                  <div className="col-md-12">
                    <div className="card mb-5">
                      <div className="card-body">
                        <div className="table-responsive-lg">
                          <table id="dataTable" className="table text-center" >
                            <thead>
                              <tr >
                                <th><strong>UserName</strong></th>
                                <th><strong>User Email</strong></th>
                                <th><strong>Number of Room Created</strong></th>
                                <th><strong>Role</strong></th>
                                <th><strong>Live Class</strong></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td className="tableId">{
                                  roomCount !== null ? (
                                    <p> {roomCount}</p>
                                  ) : (
                                    <p>no room created</p>
                                  )}
                                </td>
                                <td className="tableId"><span></span> {activity}</td>
                                <td>
  {Array.isArray(liveClasses) && liveClasses.map((liveClass) => (
    <ListItem key={liveClass._id}>
      <ListItemText
        primary={`Title : ${liveClass.title}`}
        secondary={`Scheduled at: ${new Date(liveClass.dateTime).toLocaleString()}`}
      />
      <Button href={liveClass.link} target="_blank" rel="noopener noreferrer">
        Join Class
      </Button>
    </ListItem>
  ))}
</td>

                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive text-center">
                        <table id="dataTable" className="table">
                          <thead className="text-center">
                            <tr>
                              <th><strong>Language</strong></th>
                              <th className="text-center"><strong>Code</strong></th>
                              <th className="text-center"><strong>Output</strong></th>
                              <th className="text-center"><strong>Status</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {data
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row) => (
                                <tr key={row._id}>
                                  <td className="tableCustomar">
                                    <span className="badge rounded-pill text-bg-success">{row.language}</span>
                                  </td>
                                  <td className="tableId"><span></span>  {truncateText(row.code, 9)}</td>
                                  <td className="tableId">{row.output}</td>
                                  <td className="tableId">{getStatus(row.output)}</td>
                                </tr>
                            ))}
                          </tbody>
                        </table>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="card mb-3">
                    <div className="card-body">
     

        <h4 className="text-center mt-2"><strong>Purchased Items</strong></h4>
        <div className="table-responsive">
  
      
{courses.length > 0 ? (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course, index) => (
        <tr key={index}>
          <td>{course.data.courseName}</td>
          <td>
            <Link
              to={`/purchasecourse/${course.data._id}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Go to Course
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No courses found.</p>
)}

{kits.length > 0 ? (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Kit Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {kits.map((kit, index) => (
        <tr key={index}>
          <td>{kit.data.name}</td>
          <td>{kit.data.description.split(' ').slice(0, 20).join(' ')}{kit.data.description.split(' ').length > 20 ? '...' : ''}</td>

        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No kits found.</p>
)}
 
</div>
</div>
</div>
</div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="card mb-5">
                      <div className="card-body">
                        <Bar
                          data={outputStatusChartData}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                position: 'top',
                              },
                              title: {
                                display: true,
                                text: 'Output Status',
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-5">
                      <div className="card-body">
                        <Bar
                          data={userCodeCountChartData}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                position: 'top',
                              },
                              title: {
                                display: true,
                                text: 'Number of Codes per User',
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-5">
                      <div className="card-body">
                        <Line
                          data={languageCountChartData}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                position: 'top',
                              },
                              title: {
                                display: true,
                                text: 'Number of Languages Used',
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
