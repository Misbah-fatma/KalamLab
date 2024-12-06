import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  TextField,
  Input,
  Alert,
  AlertTitle,
  CircularProgress,
  Paper,
  InputLabel,
  Box,
} from '@mui/material';
import Sidebar from '../SideBarMl';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1150px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    marginTop: '5px',
  },
  button: {
    margin: '5px',
  },
  error: {
    marginTop: '20px',
  },
  results: {
    marginTop: '20px',
  },
  fileContent: {
    marginTop: '20px',
  },
  explanations: {
    marginTop: '20px',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'contain',
  },
  clusterDetails: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  clusterItem: {
    flex: '1 1 30%',
    padding: '10px',
  },
}));

function Clustering() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [k, setK] = useState(3);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles file input
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
      const rows = content.split('\n').map((row) => row.split(','));
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  // Handles the change of 'k' value (number of clusters)
  const handleKChange = (e) => {
    setK(e.target.value);
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('k', k);

    setLoading(true);
    try {
      const response = await axiosInstance.post('/clustering', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing file:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
    setLoading(false);
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
                    <Container className={classes.container}>
                      {/* Title and Explanation */}
                      <Typography variant="h4" gutterBottom>Clustering</Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        <strong>Theoretical Explanation:</strong> Clustering is an unsupervised learning technique used to group similar data points together based on their features. The goal is to find natural groupings in the data. Unlike classification, clustering doesn’t rely on labeled data; instead, it identifies inherent structures within the dataset.
                      </Typography>

                      {/* Input Data Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Input Data Explanation
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                        The input data for clustering is typically a CSV file with feature columns. The clustering algorithm will group similar data points based on these features.
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Features:</strong> These are the attributes that describe each data point. For example, in customer segmentation, the features might include <em>spending score</em>, <em>annual income</em>, or <em>age</em>.</li>
                          <li><strong>No Labels:</strong> Clustering is an unsupervised learning technique, meaning that the input data does not require labeled outcomes.</li>
                        </ul>
                      </Typography>

                      {/* Process Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Process from Input to Output
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                        Here's how the data is processed in the clustering algorithm:
                        <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Upload CSV File:</strong> You upload a CSV file with multiple feature columns.</li>
                          <li><strong>Preprocessing:</strong> The system reads and preprocesses the CSV file, checking for missing values and scaling the features if necessary.</li>
                          <li><strong>Clustering Algorithm:</strong> The backend applies a clustering algorithm (e.g., k-means) that groups data points into clusters based on the number of clusters you define (`k`).</li>
                          <li><strong>Result:</strong> Each data point is assigned to a cluster, and the system generates a visualization of the clusters (e.g., a scatter plot).</li>
                        </ol>
                      </Typography>

                      {/* Output Data Explanation */}
                      <Typography variant="h5" gutterBottom>Output Data Explanation</Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        The output includes the following results:
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Cluster Assignments:</strong> Each data point is assigned to a cluster. Data points in the same cluster are more similar to each other than to those in other clusters.</li>
                          <li><strong>Number of Clusters (k):</strong> The number of clusters (`k`) determines how the data is divided. Choosing the right value for `k` is essential for meaningful clustering.</li>
                        </ul>
                      </Typography>

                      {/* Form for File Upload and K-input */}
                      <form onSubmit={handleSubmit} className={classes.form}>
                        <InputLabel htmlFor="file-input">Upload CSV file:</InputLabel>
                        <Input
                          id="file-input"
                          type="file"
                          onChange={handleFileChange}
                          fullWidth
                          margin="normal"
                          className={classes.input}
                        />
                        <TextField
                          label="Number of clusters (k)"
                          type="number"
                          value={k}
                          onChange={handleKChange}
                          fullWidth
                          margin="normal"
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          disabled={!file || loading}
                        >
                          {loading ? <CircularProgress size={24} /> : 'Submit'}
                        </Button>
                      </form>

                      {/* Uploaded File Content */}
                      {fileContent && (
                        <Paper elevation={3} sx={{ p: 2, mb: 2, maxHeight: 600, overflow: 'auto' }}>
                          <Typography variant="h6">Uploaded CSV Content</Typography>
                          <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  {fileContent[0].map((header, index) => (
                                    <th key={index}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {fileContent.slice(1).map((row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                      <td key={cellIndex}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Paper>
                      )}

                      {/* Error Display */}
                      {error && (
                        <Alert severity="error" className={classes.error}>
                          <AlertTitle>Error</AlertTitle>
                          {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
                        </Alert>
                      )}

                      {/* Clustering Results */}
                      {result && (
                        <div className={classes.results}>
                          <Typography variant="h5">Results</Typography>
                          <div className={classes.imageContainer}>
                            <img
                              src={`data:image/png;base64,${result.image_base64}`}
                              alt="Clustering Scatter Plot"
                              className={classes.image}
                            />
                          </div>
                          <div className={classes.clusterDetails}>
                            {Object.keys(result.clusters).map((cluster) => (
                              <Paper key={cluster} className={classes.clusterItem} elevation={3}>
                                <Typography variant="h6">Cluster {cluster}</Typography>
                                <pre>{JSON.stringify(result.clusters[cluster], null, 2)}</pre>
                              </Paper>
                            ))}
                          </div>

                          {/* Explanation of Results */}
                          <div className={classes.explanations}>
                            <Typography variant="h6">Explanation of Results:</Typography>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                              <strong>Cluster Assignments:</strong> Each data point is assigned to a specific cluster based on its features. Data points in the same cluster are more similar to each other compared to those in different clusters.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                              <strong>Number of Clusters (k):</strong> The value of `k` is essential in clustering as it defines how many groups the data is divided into. A good choice of `k` ensures that the clusters are meaningful and represent distinct groups in the dataset.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                              <strong>Interpretation:</strong> By examining the clusters, you can find patterns in the data that may indicate similar behaviors. For example, in customer segmentation, you might identify different types of shoppers based on their spending patterns.
                            </Typography>
                          </div>
                        </div>
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

export default Clustering;
