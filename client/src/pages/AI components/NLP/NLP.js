import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../SideBarAi';
import { Container, TextField, Button, Typography, Card, CardContent, Paper, Tabs, Tab, Box } from '@mui/material';

function NLP() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [activeStep, setActiveStep] = useState('tokens');
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Handles form submission and text processing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/process-text', 
        { sentence: inputText },
        { headers: { Authorization: "Bearer " + localStorage.getItem("auth_token") } }
      );
      setResult(response.data);
      setActiveStep('tokens');
    } catch (error) {
      console.error("Error processing text:", error);
    }
  };

  // Handles tab change for different steps of NLP output
  const handleTabChange = (event, newValue) => {
    setActiveStep(newValue);
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
    <Container>

      {/* Title and Explanation */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>Natural Language Processing (NLP)</Typography>
        <Typography paragraph sx={{ textAlign: 'justify' }}>
          <strong>Theoretical Explanation:</strong> NLP (Natural Language Processing) is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language. It bridges the gap between human communication and computer understanding by using algorithms and linguistic rules to process language.
        </Typography>
        <Typography paragraph sx={{ textAlign: 'justify' }}>
          NLP tasks often include text analysis, speech recognition, translation, and other language-related tasks. The process usually involves breaking down sentences into smaller parts (tokens), analyzing word forms (lemmatization), and understanding context.
        </Typography>

        {/* Input Data Explanation */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
          Input Data Explanation
        </Typography>
        <Typography paragraph sx={{ textAlign: 'justify' }}>
          The input data for this NLP model is a sentence or paragraph of text. It will be processed to extract meaningful features such as tokens, filtered tokens (after removing stop words), lemmatized tokens, and bag of words (BoW) representation. Each step of the process serves a different purpose in understanding and analyzing text.
        </Typography>

        {/* Output Data Explanation */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
          Output Data Explanation
        </Typography>
        <Typography paragraph sx={{ textAlign: 'justify' }}>
          The output includes various stages of NLP analysis:
        </Typography>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
          <li><Typography variant="body2"><strong>Tokens:</strong> The text is split into individual words or subunits (tokens), which serve as the fundamental elements for further analysis.</Typography></li>
          <li><Typography variant="body2"><strong>Filtered Tokens:</strong> These tokens are filtered to remove common stop words (e.g., "the", "and", "is") that do not carry significant meaning for analysis.</Typography></li>
          <li><Typography variant="body2"><strong>Lemmatized Tokens:</strong> Words are reduced to their base or root form (lemma), which helps in understanding the core meaning of each token regardless of tense or form.</Typography></li>
          <li><Typography variant="body2"><strong>Bag of Words:</strong> This is a vectorized representation of the input text where each word's occurrence is counted, creating a matrix used for machine learning models.</Typography></li>
          <li><Typography variant="body2"><strong>Vocabulary:</strong> A list of unique words in the text, useful for understanding the overall content and context of the input.</Typography></li>
        </ul>

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            label="Enter a sentence or paragraph"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={handleInputChange}
            style={styles.input}
          />
          <Button type="submit" variant="contained" color="primary" style={styles.button}>Process</Button>
        </form>

        {/* NLP Results Display */}
        {result && (
          <Paper style={styles.results}>
            <Tabs value={activeStep} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
              <Tab label="Tokens" value="tokens" />
              <Tab label="Filtered Tokens" value="filteredTokens" />
              <Tab label="Lemmatized Tokens" value="lemmatizedTokens" />
              <Tab label="Bag of Words" value="bagOfWords" />
              <Tab label="Vocabulary" value="vocabulary" />
            </Tabs>
            <Box p={3}>
              {activeStep === 'tokens' && (
                <Typography paragraph><strong>Tokens:</strong> {result.tokens.join(', ')}</Typography>
              )}
              {activeStep === 'filteredTokens' && (
                <Typography paragraph><strong>Filtered Tokens:</strong> {result.filtered_tokens.join(', ')}</Typography>
              )}
              {activeStep === 'lemmatizedTokens' && (
                <Typography paragraph><strong>Lemmatized Tokens:</strong> {result.lemmatized_tokens.join(', ')}</Typography>
              )}
              {activeStep === 'bagOfWords' && (
                <Typography paragraph><strong>Bag of Words:</strong> {JSON.stringify(result.bag_of_words)}</Typography>
              )}
              {activeStep === 'vocabulary' && (
                <Typography paragraph><strong>Vocabulary:</strong> {JSON.stringify(result.vocabulary)}</Typography>
              )}
            </Box>
          </Paper>
        )}
      </Box>
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

// Custom styles for the form and results
const styles = {
  form: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
  results: {
    marginTop: '20px',
  },
};

export default NLP;
