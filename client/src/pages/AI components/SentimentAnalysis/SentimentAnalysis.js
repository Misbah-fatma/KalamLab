import React, { useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from '../SideBarAi';
import { TextField, Button, Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';

function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/sentiment-analysis', { text });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing text:", error);
      setError(error.response ? error.response.data : "Network Error");
    }
  };

  // Generates data for the bar chart
  const getBarChartData = () => {
    return {
      labels: ['Polarity', 'Subjectivity'],
      datasets: [
        {
          label: 'Sentiment Analysis',
          data: [result.polarity, result.subjectivity],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Generates data for the line chart
  const getLineChartData = () => {
    return {
      labels: ['Polarity', 'Subjectivity'],
      datasets: [
        {
          label: 'Sentiment Analysis Trend',
          data: [result.polarity, result.subjectivity],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false,
        },
      ],
    };
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
                  <li className="breadcrumb-item active" aria-current="page">Sentiment Analysis</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <Card variant="outlined" sx={{ marginBottom: 5 }}>
                  <CardContent>
                    <Container maxWidth="xl">
                      {/* Title and Theoretical Explanation */}
                      <Typography variant="h4" component="h1" gutterBottom>
                        Sentiment Analysis
                      </Typography>
                      <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
                        <strong>Theoretical Explanation:</strong> Sentiment analysis is the process of determining the emotional tone behind a series of words. It is used to gain an understanding of the attitudes, opinions, and emotions expressed in text. Common applications include analyzing customer feedback, social media posts, and product reviews to gauge overall sentiment.
                      </Typography>

                      {/* Input Data Explanation */}
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                        Input Data Explanation
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                        The input data for sentiment analysis is a text string, such as a sentence, paragraph, or any piece of text. The text is processed to determine two main outputs:
                      </Typography>
                      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
  {/* Polarity Explanation */}
  <li>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Polarity:</strong> Polarity in sentiment analysis refers to the degree of positivity or negativity expressed in a piece of text. It indicates whether the sentiment is positive, neutral, or negative.
    </Typography>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Range:</strong> Polarity ranges from <strong>-1</strong> (most negative) to <strong>+1</strong> (most positive).
      <ul>
        <li><strong>Negative Polarity:</strong> Scores closer to <strong>-1</strong> indicate negative sentiment (e.g., "terrible", "bad").</li>
        <li><strong>Neutral Polarity:</strong> A score of <strong>0</strong> indicates neutral sentiment (e.g., fact-based text).</li>
        <li><strong>Positive Polarity:</strong> Scores closer to <strong>+1</strong> indicate positive sentiment (e.g., "amazing", "fantastic").</li>
      </ul>
    </Typography>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Example:</strong>
      <ul>
        <li><strong>Positive Polarity (+0.8):</strong> "The product is absolutely fantastic and exceeded my expectations."</li>
        <li><strong>Negative Polarity (-0.6):</strong> "The service was terrible and not worth the money."</li>
        <li><strong>Neutral Polarity (0):</strong> "The report is due tomorrow, and the deadline is 5 pm."</li>
      </ul>
    </Typography>
  </li>

  {/* Subjectivity Explanation */}
  <li>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Subjectivity:</strong> Subjectivity measures how much of the text is based on personal opinions, feelings, or beliefs, as opposed to objective facts. It determines whether the text reflects personal, subjective views or factual, objective information.
    </Typography>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Range:</strong> Subjectivity ranges from <strong>0</strong> (completely objective) to <strong>1</strong> (completely subjective).
      <ul>
        <li><strong>Low Subjectivity:</strong> Scores closer to <strong>0</strong> indicate factual, objective content (e.g., "The company reported a 5% increase in revenue.").</li>
        <li><strong>High Subjectivity:</strong> Scores closer to <strong>1</strong> indicate opinionated, subjective content (e.g., "I think this is the best phone I've ever used.").</li>
      </ul>
    </Typography>
    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
      <strong>Example:</strong>
      <ul>
        <li><strong>High Subjectivity (0.9):</strong> "I absolutely love this movie! The plot is thrilling, and the acting is superb."</li>
        <li><strong>Low Subjectivity (0.1):</strong> "The movie was released in 2021 and has a runtime of 2 hours."</li>
        <li><strong>Moderate Subjectivity (0.5):</strong> "This restaurant serves decent food, but the service could be better."</li>
      </ul>
    </Typography>
  </li>
</ul>

                      {/* Input Form */}
                      <form onSubmit={handleSubmit}>
                        <TextField
                          fullWidth
                          label="Enter Text"
                          value={text}
                          onChange={handleTextChange}
                          variant="outlined"
                          margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                          Submit
                        </Button>
                      </form>

                      {/* Error Display */}
                      {error && (
                        <div style={styles.error}>
                          <Typography variant="h6" color="error">
                            Error
                          </Typography>
                          <pre>{JSON.stringify(error, null, 2)}</pre>
                        </div>
                      )}

                      {/* Results Display */}
                      {result && (
                        <div style={styles.results}>
                          <Box style={styles.explanations} justifyContent="center" alignItems="center">
                            <Typography variant="h5" gutterBottom>
                              <strong> Results </strong>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <strong>Polarity:</strong> {result.polarity}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <strong>Subjectivity:</strong> {result.subjectivity}
                            </Typography>
                          </Box>

                          {/* Chart Display */}
                          <Grid container spacing={3} style={styles.chartContainer}>
                            <Grid item xs={12} md={6}>
                              <Card variant="outlined">
                                <CardContent>
                                  <Box display="flex" justifyContent="center" alignItems="center">
                                    <Bar data={getBarChartData()} />
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card variant="outlined">
                                <CardContent>
                                  <Box display="flex" justifyContent="center" alignItems="center">
                                    <Line data={getLineChartData()} />
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          {/* Explanation of Results */}
                          <Box style={styles.explanations} justifyContent="center" alignItems="center">
                            <Typography variant="h6" gutterBottom>
                              Explanation of Results:
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
                              <strong>Polarity:</strong> Polarity ranges from -1 to 1. A score of -1 means the text is very negative, a score of 1 means the text is very positive, and a score of 0 means the text is neutral.
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
                              <strong>Subjectivity:</strong> Subjectivity ranges from 0 to 1. A score of 0 means the text is very objective (fact-based), and a score of 1 means the text is very subjective (opinion-based).
                            </Typography>
                          </Box>
                        </div>
                      )}
                    </Container>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom styles for the form, charts, and results
const styles = {
  error: {
    color: 'red',
    marginTop: '20px'
  },
  results: {
    marginTop: '20px',
    alignItems: "center"
  },
  chartContainer: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  explanations: {
    backgroundColor: '#F9F9F9',
    padding: '20px',
    borderRadius: '5px'
  }
};

export default SentimentAnalysis;
