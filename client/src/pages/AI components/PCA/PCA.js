import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Button,
  Input,
  FormControl,
  InputLabel,
  Paper,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Sidebar from '../SideBarMl';

const PCA = () => {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles file input change
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFileContent(uploadedFile);
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

    try {
      const response = await axiosInstance.post('/pca', formData, {
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
                    <Container maxWidth="xl" sx={{ mt: 4 }}>
                      {/* Title and Explanation */}
                      <Typography variant="h4" gutterBottom>Principal Component Analysis (PCA)</Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        <strong>Theoretical Explanation:</strong> Principal Component Analysis (PCA) is a dimensionality reduction technique that reduces the number of variables in a dataset by transforming it into a set of principal components. These components capture the directions in which the data varies the most, preserving essential information.
                      </Typography>

                      {/* Input Data Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Input Data Explanation
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        The input data for PCA is typically provided as a CSV file with columns of features. For example, a dataset of handwritten digits might include pixel values as features:
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Features:</strong> These are numerical values that represent characteristics of the data. In image data, for example, each feature could represent a pixel’s intensity.</li>
                        </ul>
                      </Typography>

                      {/* Process from Input to Output */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Process from Input to Output
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        Here’s how the PCA process works from input to output:
                        <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Upload CSV File:</strong> You upload a CSV file containing the features of the dataset (e.g., pixel values for images).</li>
                          <li><strong>Preprocessing:</strong> The system preprocesses the data by standardizing the features if necessary.</li>
                          <li><strong>PCA Algorithm:</strong> The PCA algorithm reduces the number of dimensions by finding the directions of maximum variance, known as principal components.</li>
                          <li><strong>Output:</strong> The output includes the transformed dataset with the principal components and their respective variance explained.</li>
                        </ol>
                      </Typography>

                      {/* Form for File Upload */}
                      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                          <Input type="file" onChange={handleFileChange} />
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                      </Box>

                      {/* Display Uploaded File Content */}
                      {fileContent && (
                        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
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
                        </Paper>
                      )}

                      {/* Error Handling */}
                      {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                          <Typography variant="h6">Error</Typography>
                          <pre>{JSON.stringify(error, null, 2)}</pre>
                        </Alert>
                      )}

                      {/* Display Results */}
                      {result && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="h6">Results</Typography>
                          <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <img src={`data:image/png;base64,${result.image_base64}`} alt="PCA Scatter Plot" style={{ width: '70%', height: '500px', marginBottom: '20px' }} />
                          </Box>
                          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6">Explanation of Results</Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                              <strong>Principal Components:</strong> Principal components are the directions in which the data varies the most. Each principal component represents a combination of the original features that accounts for the maximum variance in the data.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                              <strong>Variance Explained:</strong> The principal components are ranked by the amount of variance they explain. The first principal component explains the most variance, while subsequent components explain progressively less.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                              <strong>Interpretation:</strong> The scatter plot visualizes the data in terms of the principal components. This can help reveal patterns in the data, such as clusters or trends that may not have been visible in the original high-dimensional space.
                            </Typography>
                          </Paper>
                          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6">List of Principal Components</Typography>
                            <pre>{JSON.stringify(result.principal_components, null, 2)}</pre>
                          </Paper>
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
};

export default PCA;
