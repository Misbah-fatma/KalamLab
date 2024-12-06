import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container, Typography, Button, Box, Paper, Alert, Card, CardContent, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../SideBarMl';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Classification() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFileContent(uploadedFile);
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split('\n').map((row, rowIndex) => {
        const cells = row.split(',');
        return { id: rowIndex + 1, ...cells.reduce((acc, cell, cellIndex) => ({ ...acc, [`col${cellIndex}`]: cell }), {}) };
      });
      setFileContent(rows);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axiosInstance.post('/classification', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  const data = result ? {
    labels: result.classes,
    datasets: [
      {
        label: 'Precision',
        data: result.precision,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Recall',
        data: result.recall,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'F1-Score',
        data: result.f1_score,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
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
        text: 'Classification Metrics',
      },
    },
  };

  const columns = fileContent ? Object.keys(fileContent[0]).map((key) => ({ field: key, headerName: key })) : [];

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
                    <Container maxWidth="xl">
                      <Typography variant="h4" gutterBottom>Classification</Typography>
                      <Typography paragraph sx={{ textAlign: 'justify' }}>
                        <strong>Theoretical Explanation:</strong> Classification is a supervised learning technique that categorizes new data points into predefined labels based on historical data. It is often used in scenarios where the goal is to predict a category, such as identifying whether an email is spam or not.
                      </Typography>

                      {/* Detailed Explanation of Input Data */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Input Data Explanation
                      </Typography>
                      <Typography paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                        The input data for this classification model should be a CSV file containing multiple columns of <strong>features</strong> and one column of <strong>label</strong> (the category to predict). Let's break down each component:
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Features:</strong> These are the attributes or variables that describe each data point and help the classification model to identify patterns. For example, in a flower classification problem, the features might include <em>petal length</em>, <em>petal width</em>, <em>sepal length</em>, and <em>sepal width</em>. Each of these features contains numerical values that differentiate one flower from another.</li>
                          <li><strong>Label:</strong> The label represents the target variable or the category you want to predict. It is the output the model is trying to classify. In our flower example, the label could be the type of flower, such as <em>Iris-setosa</em>, <em>Iris-versicolor</em>, or <em>Iris-virginica</em>. The label is typically a categorical value, meaning it belongs to a fixed set of possible values (flower types, spam vs. not spam, etc.).</li>
                        </ul>
                      </Typography>

                      {/* Process Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Process from Input to Output
                      </Typography>
                      <Typography paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                        Here’s the detailed process of how the data moves from input to output:
                        <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><strong>Upload CSV File:</strong> The user provides a CSV file containing the feature columns and the label column. For example, in a spam detection problem, the CSV could contain columns for email content features (such as word count, presence of certain keywords, etc.) and a label indicating whether the email is "spam" or "not spam".</li>
                          <li><strong>Preprocessing:</strong> Once the file is uploaded, the system reads the CSV data and ensures it is clean and well-formatted. Preprocessing may involve:
                            <ul>
                              <li>Handling missing values: If some feature values are missing, they can be filled in (imputation) or removed.</li>
                              <li>Scaling features: Some models require feature values to be in a similar range (e.g., scaling all values between 0 and 1).</li>
                              <li>Encoding categorical variables: If features are non-numerical (e.g., country names), they need to be converted into numerical format using techniques like one-hot encoding.</li>
                            </ul>
                          </li>
                          <li><strong>Model Training:</strong> After preprocessing, the system sends the data to the backend where the classification model is trained. During training, the model "learns" from the data by identifying patterns between the features and labels. This step involves selecting an algorithm (e.g., decision trees, random forests, support vector machines) that fits the data to make future predictions.</li>
                          <li><strong>Prediction and Evaluation:</strong> Once the model has been trained, it is used to classify new, unseen data. The system evaluates the model's performance by comparing the predicted labels with the actual labels using metrics such as <strong>precision</strong>, <strong>recall</strong>, and <strong>F1-score</strong>.</li>
                        </ol>
                      </Typography>

                      {/* Detailed Explanation of Output */}
                      <Typography variant="h5" gutterBottom>Output Data Explanation</Typography>
                      <Typography paragraph sx={{ textAlign: 'justify' }}>
                        The output includes several performance metrics that help assess how well the classification model performed:
                        <ul>
                          <li><strong>Precision:</strong> The ratio of correctly predicted positive observations to the total predicted positives. High precision relates to a low false positive rate.</li>
                          <li><strong>Recall:</strong> The ratio of correctly predicted positive observations to all observations in the actual class. High recall means the model captures most of the positive cases.</li>
                          <li><strong>F1-Score:</strong> The harmonic mean of precision and recall. It is useful when the class distribution is imbalanced.</li>
                          <li><strong>Accuracy:</strong> The percentage of correctly predicted labels out of all predictions.</li>
                          <li><strong>Support:</strong> The number of actual occurrences of each class in the dataset.</li>
                        </ul>
                      </Typography>

                      {/* File Upload and Classification Form */}
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
                        <Button type="submit" variant="contained" color="secondary">Submit</Button>
                      </form>

                      {/* Displaying the content of uploaded file */}
                      {fileContent && (
                        <Box mt={4}>
                          <Typography variant="h6" sx={{ textAlign: 'center' }}>Uploaded File Content</Typography>
                          <Paper style={{ height: 400, width: '100%' }}>
                            <DataGrid
                              rows={fileContent.slice(0, 10)}
                              columns={columns}
                              pageSize={10}
                              rowsPerPageOptions={[10]}
                              checkboxSelection={false}
                              disableSelectionOnClick
                            />
                          </Paper>
                        </Box>
                      )}

                      {/* Displaying error messages if any */}
                      {error && (
                        <Box mt={4}>
                          <Alert severity="error">
                            <Typography variant="h6">Error</Typography>
                            <pre>{JSON.stringify(error, null, 2)}</pre>
                          </Alert>
                        </Box>
                      )}

                      {/* Displaying results and classification report */}
                      {result && (
                        <Box mt={4}>
                          <Card>
                            <CardContent>
                              <Typography variant="h6" sx={{ textAlign: 'center' }}>Results</Typography>
                              <Typography variant="body1" sx={{ textAlign: 'center' }}><strong>Accuracy:</strong> {result.accuracy}</Typography>
                              <Grid container spacing={2} mt={2}>
                                <Grid item xs={12} md={6}>
                                  <Box style={{ height: 300 }}>
                                    <Bar data={data} options={options} />
                                  </Box>
                                </Grid>
                                <div className="d-flex" style={{padding : "20px" , height: '300px'}}>
                                  <div className="vr"></div>
                                </div>
                                <Grid item xs={12} md={5}>
                                  <Box>
                                    <Typography variant="h6" sx={{ textAlign: 'center' }}>Detailed Report</Typography>
                                    <pre>{result.report}</pre>
                                  </Box>
                                </Grid>
                              </Grid>

                              {/* Detailed Practical Explanation of Metrics */}
                              <Box mt={4}>
                                <Typography variant="h6">Explanation of Results</Typography>

                                <Typography paragraph sx={{ textAlign: 'justify' }}>
                                  <strong>Accuracy:</strong> Accuracy represents the proportion of correct predictions over all predictions. While it's a useful metric, it might be misleading in cases of imbalanced datasets.
                                  <br /><em>Example:</em> Imagine you have 1000 emails, 950 are not spam and 50 are spam. If a model predicts all emails as "not spam," the accuracy would still be 95%, even though it completely failed to detect any spam.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: 'justify' }}>
                                  <strong>Precision:</strong> Precision is the ratio of correctly predicted positive instances (true positives) to the total predicted positives (true positives + false positives). It focuses on how precise the model is in predicting the positive class.
                                  <br /><em>Example:</em> In a medical diagnosis, precision answers the question: "Out of all the patients the model predicted as having a disease, how many truly had the disease?" If precision is high, fewer patients without the disease are being diagnosed incorrectly.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: 'justify' }}>
                                  <strong>Recall:</strong> Recall is the ratio of correctly predicted positive instances to all instances in the actual class (true positives + false negatives). It focuses on the model's ability to identify all positive instances.
                                  <br /><em>Example:</em> In the case of fraud detection, recall measures how many actual fraudulent transactions the model successfully identifies. High recall is critical when missing out on a positive prediction (e.g., undetected fraud) has a higher cost.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: 'justify' }}>
                                  <strong>F1-Score:</strong> The F1-Score is the harmonic mean of precision and recall. It provides a balanced measure when there is an uneven class distribution, combining both precision and recall into a single metric.
                                  <br /><em>Example:</em> In situations like cancer detection, where missing a true positive (high recall) is critical, but we also want to minimize false positives (high precision), the F1-score provides a single measure that balances both concerns.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: 'justify' }}>
                                  <strong>Support:</strong> Support refers to the number of actual occurrences of each class in your dataset. It gives context to the other metrics by showing how many instances there were for each class.
                                  <br /><em>Example:</em> If you are classifying different species of plants, support tells you how many instances of each species are in the dataset. Low support can make other metrics like precision and recall less reliable due to the limited data.
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
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

export default Classification;
