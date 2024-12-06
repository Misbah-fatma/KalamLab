import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "../SideBarAi";
import {
  Container,
  Typography,
  Button,
  TextField,
  Input,
  Card,
  CardContent,
  CardActions,
  Alert,
  AlertTitle,
  CircularProgress,
  Stepper,
  Step,
  StepButton,
  Box
} from '@mui/material';
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
  activeButton: {
    margin: '5px',
  },
  error: {
    marginTop: '20px',
  },
  results: {
    marginTop: '20px',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  outputContainer: {
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

function CNN() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeStep, setActiveStep] = useState('');
  const [loading, setLoading] = useState(false);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImageURL(URL.createObjectURL(file));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const response = await axiosInstance.post('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        }
      });
      setResult(response.data);
      setActiveStep('conv2d');  // Set the first step as 'conv2d'
      setError(null);
    } catch (error) {
      console.error("Error processing image:", error);
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
                    <div className="d-flex justify-content-between mb-3">
                      <Container className={classes.container}>
                        {/* Title and Theoretical Explanation */}
                        <Typography variant="h4" gutterBottom>
                          Convolutional Neural Networks (CNN)
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                          <strong>Theoretical Explanation:</strong> CNNs are a class of deep learning models primarily used for image recognition and classification. CNNs can automatically learn spatial hierarchies of features, such as edges, textures, and complex patterns, directly from the input image, making them highly effective for tasks like object detection and facial recognition.
                        </Typography>

                        {/* Input Data Explanation */}
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                          Input Data Explanation
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                          The input to the CNN is an image file. The CNN will process the image through multiple layers, such as convolutional and pooling layers, to extract features and classify the content of the image.
                        </Typography>

                        {/* Output Data Explanation */}
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                          Output Data Explanation
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                          The output of the CNN includes the classification result and intermediate outputs from different layers. Below is a detailed explanation of each step and the type of output generated at each layer:
                        </Typography>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                          <li><Typography variant="body2"><strong>Conv1 Output:</strong> The first convolutional layer detects low-level features like edges and textures.</Typography></li>
                          <li><Typography variant="body2"><strong>Pool1 Output:</strong> The first pooling layer reduces the spatial dimensions, focusing on the most important features.</Typography></li>
                          <li><Typography variant="body2"><strong>Conv2 Output:</strong> The second convolutional layer captures more complex features like corners and shapes.</Typography></li>
                          <li><Typography variant="body2"><strong>Pool2 Output:</strong> The second pooling layer further reduces spatial dimensions, retaining essential information.</Typography></li>
                          <li><Typography variant="body2"><strong>Conv3 Output:</strong> The third convolutional layer captures even more abstract features and patterns.</Typography></li>
                          <li><Typography variant="body2"><strong>Flatten Output:</strong> The feature maps are flattened into a one-dimensional vector for input to the fully connected layers.</Typography></li>
                          <li><Typography variant="body2"><strong>Dense1 Output:</strong> The first fully connected layer processes the combined features to make predictions.</Typography></li>
                          <li><Typography variant="body2"><strong>Final Prediction:</strong> The final layer outputs the probabilities for each class. The class with the highest probability is selected as the prediction for the input image.</Typography></li>
                        </ul>

                        {/* Form for File Upload */}
                        <form onSubmit={handleSubmit} className={classes.form}>
                          <TextField
                            variant="outlined"
                            type="file"
                            onChange={handleFileChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            className={classes.input}
                          />
                          {imageURL && (
                            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                              <img src={imageURL} alt="Uploaded file preview" className={classes.image} />
                            </Box>
                          )}
                          <br/>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            {loading ? <CircularProgress size={24} /> : 'Classify'}
                          </Button>
                        </form>

                        {/* Error Handling */}
                        {error && (
                          <Alert severity="error" className={classes.error}>
                            <AlertTitle>Error</AlertTitle>
                            {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
                          </Alert>
                        )}

                        {/* Result and CNN Layer Outputs */}
                        {result && (
                          <div className={classes.results}>
                            <Typography variant="h5">Classification Result</Typography>
                            <Stepper nonLinear alternativeLabel>
                              {Object.keys(result).map((layer, index) => (
                                <Step key={index} active={activeStep === layer}>
                                  <StepButton onClick={() => setActiveStep(layer)}>
                                    {layer}
                                  </StepButton>
                                </Step>
                              ))}
                            </Stepper>
                            <Card className={classes.outputContainer}>
                              <CardContent>
                                {result[activeStep] && typeof result[activeStep] === 'string' ? (
                                  <img src={`data:image/png;base64,${result[activeStep]}`} alt={`${activeStep} Output`} className={classes.image} />
                                ) : (
                                  <pre>{JSON.stringify(result[activeStep], null, 2)}</pre>
                                )}
                              </CardContent>
                            </Card>
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
    </div>
  );
}

export default CNN;
