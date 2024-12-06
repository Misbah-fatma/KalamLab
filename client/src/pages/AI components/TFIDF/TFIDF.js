import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../SideBarAi';
import { Box, Button, Container, Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from '@mui/material';

function TFIDF() {
  const [texts, setTexts] = useState(['']);
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL_PYTHON });

  // Handles text input change
  const handleTextChange = (index, value) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  // Adds a new text box for entering documents
  const handleAddTextBox = () => {
    setTexts([...texts, '']);
  };

  // Handles file uploads
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // Submits form data for TF-IDF calculation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
    }
    formData.append('texts', JSON.stringify(texts));

    try {
      const response = await axiosInstance.post('/tfidf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error processing texts/files:", error);
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
                    <Container maxWidth="lg">
                      <Box mt={4} mb={4}>
                        <Typography variant="h4" gutterBottom>
                          TF-IDF Calculation
                        </Typography>

                        <Grid container spacing={4}>
                          {/* Theoretical Explanation */}
                          <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                              <Typography variant="h6">Theoretical Explanation:</Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>TF-IDF (Term Frequency-Inverse Document Frequency)</strong> is a widely used numerical statistic that reflects how important a word is to a document in a collection or corpus. TF-IDF is essential for text mining and information retrieval tasks, especially when dealing with a large number of documents or datasets. The core idea behind TF-IDF is to emphasize words that are frequent in a document but not very common across multiple documents, making these words more distinctive and relevant for analysis.
                              </Typography>
                              <Typography variant="h6">Type of Input Data:</Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                Users can input text directly into the form or upload text files. The input data represents individual documents from which the TF-IDF score for each word will be calculated. The system can handle multiple text inputs or files, with each input being treated as a separate document for the TF-IDF calculation.
                              </Typography>
                              <Typography variant="h6">How TF-IDF Works:</Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>Term Frequency (TF):</strong> TF measures the number of times a term (or word) appears in a document, normalized by the total number of terms in that document. This gives us the relative frequency of the term within the document, showing how significant it is within the context of that specific document.
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                Formula: <strong>TF(t) = (Number of times term t appears in a document) / (Total number of terms in the document)</strong>
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>Inverse Document Frequency (IDF):</strong> IDF measures how important a term is across all documents in the corpus. It reduces the weight of common terms that appear in many documents, while increasing the importance of rare terms that appear in fewer documents.
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                Formula: <strong>IDF(t) = log(Total number of documents / Number of documents containing term t)</strong>
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>TF-IDF Calculation:</strong> TF-IDF is the product of TF and IDF, providing a score that weighs the importance of a term in a specific document relative to the entire corpus.
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                Formula: <strong>TF-IDF(t) = TF(t) × IDF(t)</strong>
                              </Typography>
                              <Typography variant="h6">Example:</Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                Consider a collection of three documents:
                                <ul>
                                  <li><em>Document 1:</em> "the cat sat on the mat"</li>
                                  <li><em>Document 2:</em> "the cat is a pet"</li>
                                  <li><em>Document 3:</em> "dogs are pets too"</li>
                                </ul>
                                Suppose we want to calculate the TF-IDF for the word "cat":
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>Term Frequency (TF):</strong><br />
                                TF("cat", Document 1) = 1/6<br />
                                TF("cat", Document 2) = 1/5<br />
                                TF("cat", Document 3) = 0/4 = 0
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>Inverse Document Frequency (IDF):</strong><br />
                                Number of documents containing "cat" = 2<br />
                                Total number of documents = 3<br />
                                IDF("cat") = log(3/2) = 0.176
                              </Typography>
                              <Typography paragraph sx={{ textAlign: 'justify' }}>
                                <strong>TF-IDF:</strong><br />
                                TF-IDF("cat", Document 1) = (1/6) * 0.176 = 0.029<br />
                                TF-IDF("cat", Document 2) = (1/5) * 0.176 = 0.035<br />
                                TF-IDF("cat", Document 3) = 0
                              </Typography>
                            </Paper>
                          </Grid>

                          {/* Form for Inputs */}
                          <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                              <form onSubmit={handleSubmit}>
                                {texts.map((text, index) => (
                                  <Box key={index} mb={2}>
                                    <TextField
                                      label={`Document ${index + 1}`}
                                      value={text}
                                      onChange={(e) => handleTextChange(index, e.target.value)}
                                      multiline
                                      rows={4}
                                      fullWidth
                                    />
                                  </Box>
                                ))}

                                {/* Add more text areas */}
                                <Box mt={2} mb={2}>
                                  <Button variant="contained" color="primary" onClick={handleAddTextBox}>
                                    Add Text
                                  </Button>
                                  <Button
                                    variant="contained"
                                    component="label"
                                    color="primary"
                                    className='m-2'
                                  >
                                    Upload text files
                                    <input
                                      type="file"
                                      onChange={handleFileChange}
                                      hidden
                                      multiple
                                    />
                                  </Button>
                                </Box>

                                {/* Submit Button */}
                                <Button type="submit" variant="contained" color="success">
                                  Submit
                                </Button>
                              </form>

                              {/* Error Display */}
                              {error && (
                                <Box mt={2}>
                                  <Alert severity="error">
                                    <pre>{JSON.stringify(error, null, 2)}</pre>
                                  </Alert>
                                </Box>
                              )}

                              {/* Results Table */}
                              {result && (
                                <Box mt={2}>
                                  <Typography variant="h6">Results</Typography>
                                  <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
                                    <Table stickyHeader>
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Term</TableCell>
                                          {result.tfidf_scores.map((_, index) => (
                                            <TableCell key={index}>Document {index + 1}</TableCell>
                                          ))}
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {result.feature_names.map((term, index) => (
                                          <TableRow key={index}>
                                            <TableCell>{term}</TableCell>
                                            {result.tfidf_scores.map((scores, docIndex) => (
                                              <TableCell key={docIndex}>{scores[index].toFixed(3)}</TableCell>
                                            ))}
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Box>
                              )}
                            </Paper>
                          </Grid>
                        </Grid>
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
  );
}

export default TFIDF;
