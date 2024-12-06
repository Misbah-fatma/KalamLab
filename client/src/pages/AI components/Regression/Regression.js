import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Container,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Alert,
  TextField
} from '@mui/material';
import Sidebar from '../SideBarMl';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Regression() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [testSize, setTestSize] = useState(0.2);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles file input change
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFileContent(uploadedFile); 
  };

  // Handles test size input change
  const handleTestSizeChange = (e) => {
    setTestSize(e.target.value);
  };

  // Reads the content of the uploaded file
  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split('\n').map(row => row.split(','));
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('test_size', testSize); 

    try {
      const response = await axiosInstance.post('/regression', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing file:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  // Data for the regression line chart
  const data = result ? {
    labels: result.predictions.map((_, index) => `Data Point ${index + 1}`),
    datasets: [
      {
        label: 'Actual Values',
        data: result.actuals,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Predicted Values',
        data: result.predictions,
        borderColor: 'red',
        fill: false,
      },
    ],
  } : null;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actual vs Predicted Values',
      },
    },
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">AI Model</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3"></div>
                    <Container maxWidth="xl">
                      {/* Title and Theoretical Explanation */}
                      <Typography variant="h4" gutterBottom>Regression Analysis</Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        <strong>Theoretical Explanation:</strong> Regression is a predictive modeling technique used to predict a continuous target variable (such as house prices) based on one or more input features (such as the number of rooms, total area, etc.). It helps understand relationships between dependent and independent variables.
                      </Typography>

                      {/* Input Data Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Input Data Explanation
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        The input data for regression analysis is a CSV file that contains various features (independent variables) and the target value (dependent variable). Each row represents a data point, and each column represents a feature or the target value.
                      </Typography>

                      {/* Process from Input to Output */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Process from Input to Output
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        Here’s how the regression analysis process works from input to output:
                        <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Upload CSV File:</strong> You upload a CSV file containing the data for the regression analysis.</li>
                          <li><strong>Test Size:</strong> You specify the test size, which is the proportion of the data used for testing the model. The rest is used for training.</li>
                          <li><strong>Model Training:</strong> The system splits the data into training and test sets and trains a regression model using the training data.</li>
                          <li><strong>Prediction and Evaluation:</strong> The model generates predictions on the test data, and its performance is evaluated using the Mean Squared Error (MSE), which measures how close the predicted values are to the actual values.</li>
                        </ol>
                      </Typography>

                      {/* Form for File Upload and Test Size Input */}
                      <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                          <Button
                            variant="contained"
                            component="label"
                            color="primary"
                          >
                            Upload CSV File
                            <input
                              type="file"
                              hidden
                              onChange={handleFileChange}
                            />
                          </Button>
                        </Box>
                        <Box mb={2}>
                          <TextField
                            label="Test Size (greater than 0 and less than 1)"
                            type="number"
                            step="0.01"
                            min="0.01"
                            max="0.99"
                            value={testSize}
                            onChange={handleTestSizeChange}
                            fullWidth
                          />
                        </Box>
                        <Button type="submit" variant="contained" color="secondary">Run Regression</Button>
                      </form>

                      {/* Display Uploaded File Content */}
                      {fileContent && (
                        <Box mt={4}>
                          <Typography variant="h6">Uploaded File Content</Typography>
                          <TableContainer component={Paper} style={{ maxHeight: 300 }}>
                            <Table stickyHeader>
                              <TableHead>
                                <TableRow>
                                  {fileContent[0].map((header, index) => (
                                    <TableCell key={index}>{header}</TableCell>
                                  ))}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {fileContent.slice(1, 6).map((row, rowIndex) => (
                                  <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                      <TableCell key={cellIndex}>{cell}</TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}

                      {/* Display Error Message */}
                      {error && (
                        <Box mt={4}>
                          <Alert severity="error">
                            <Typography variant="h6">Error</Typography>
                            <pre>{JSON.stringify(error, null, 2)}</pre>
                          </Alert>
                        </Box>
                      )}

                      {/* Display Regression Results */}
                      {result && (
                        <Box mt={4}>
                          <Typography variant="h6">Results</Typography>
                          <Typography variant="body1"><strong>Mean Squared Error:</strong> {result.mse}</Typography>
                          <Box mt={4}>
                            <Line data={data} options={options} />
                          </Box>
                        </Box>
                      )}
                    </Container>
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

export default Regression;
