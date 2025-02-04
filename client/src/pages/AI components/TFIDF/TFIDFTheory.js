import React from 'react';
import { Breadcrumbs, Card, CardContent, Container, Link, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const TFIDFExplanation = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="/" color="inherit">
                    Dashboard
                  </Link>
                  <Typography color="textPrimary">TF-IDF</Typography>
                </Breadcrumbs>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <Container maxWidth="xl" sx={{ py: 4 }}>
                      <Typography variant="h4" gutterBottom className="text-center mt-4">
                        <strong>TF-IDF: Detailed Explanation</strong>
                      </Typography>

                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h5" gutterBottom>
                            Overview
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>TF-IDF</strong> stands for Term Frequency-Inverse Document Frequency. It is a numerical statistic that reflects the importance of a word in a document relative to a collection of documents (corpus). It is commonly used in information retrieval and text mining to evaluate how important a word is to a document in a corpus.
                          </Typography>
                        </CardContent>
                      </Card>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Key Concepts in TF-IDF</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ol" gutterBottom>
                            <li>Term Frequency (TF)</li>
                            <li>Inverse Document Frequency (IDF)</li>
                            <li>TF-IDF Calculation</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Detailed Explanation of Each Concept</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="h6" gutterBottom>
                            1. Term Frequency (TF)
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Measures how frequently a term appears in a document.
                            <br />
                            <strong>Formula:</strong>
                            <Paper elevation={1} sx={{ p: 2, my: 2, backgroundColor: '#f0f0f0' }}>
                              TF(t, d) = Number of times term t appears in document d / Total number of terms in document d
                            </Paper>
                            <strong>Purpose:</strong> Indicates the significance of a term within a particular document.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`def compute_tf(term, document):
    term_count = document.count(term)
    total_terms = len(document)
    return term_count / total_terms

document = ["this", "is", "a", "sample", "document", "with", "sample", "words"]
tf = compute_tf("sample", document)
print(tf)  # Output: 0.25`}
                          />
                          <Typography variant="h6" gutterBottom>
                            2. Inverse Document Frequency (IDF)
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Measures how important a term is in the entire corpus.
                            <br />
                            <strong>Formula:</strong>
                            <Paper elevation={1} sx={{ p: 2, my: 2, backgroundColor: '#f0f0f0' }}>
                              IDF(t, D) = log(Total number of documents in corpus D / Number of documents containing term t)
                            </Paper>
                            <strong>Purpose:</strong> Helps to diminish the weight of terms that occur very frequently in the document set and increase the weight of terms that occur rarely.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import math

def compute_idf(term, corpus):
    num_documents_with_term = sum(1 for document in corpus if term in document)
    return math.log(len(corpus) / (1 + num_documents_with_term))

corpus = [
    ["this", "is", "the", "first", "document"],
    ["this", "document", "is", "the", "second", "document"],
    ["and", "this", "is", "the", "third", "one"],
    ["is", "this", "the", "first", "document"]
]
idf = compute_idf("document", corpus)
print(idf)  # Output: 0.28768207245178085`}
                          />
                          <Typography variant="h6" gutterBottom>
                            3. TF-IDF Calculation
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Combines TF and IDF to give a score that indicates the importance of a term in a document relative to the entire corpus.
                            <br />
                            <strong>Formula:</strong>
                            <Paper elevation={1} sx={{ p: 2, my: 2, backgroundColor: '#f0f0f0' }}>
                              TF-IDF(t, d, D) = TF(t, d) * IDF(t, D)
                            </Paper>
                            <strong>Purpose:</strong> Provides a balanced measure that accounts for both the term's frequency in a document and its rarity across the corpus.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`def compute_tf_idf(term, document, corpus):
    tf = compute_tf(term, document)
    idf = compute_idf(term, corpus)
    return tf * idf

tf_idf = compute_tf_idf("sample", document, corpus)
print(tf_idf)  # Output: 0.07192051811294521`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">How TF-IDF Works</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ol" gutterBottom>
                            <li><strong>Data Collection:</strong> Gather text data from various sources such as articles, documents, or web pages.</li>
                            <li><strong>Tokenization:</strong> Split the text into individual terms (words).</li>
                            <li><strong>Calculate TF:</strong> Compute the term frequency for each term in each document.</li>
                            <li><strong>Calculate IDF:</strong> Compute the inverse document frequency for each term across the entire corpus.</li>
                            <li><strong>Compute TF-IDF:</strong> Multiply the TF and IDF values to obtain the TF-IDF score for each term in each document.</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">When to Use TF-IDF</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                             When you need to identify the most relevant terms in documents for tasks like search, text analysis, and recommendation systems.
                            <br />
                             In applications that require feature extraction and weighting for machine learning models.
                            <br />
                             Examples include document retrieval, keyword extraction, and text classification.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Why TF-IDF is Important</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                             <strong>Highlighting Important Terms:</strong> Identifies and emphasizes terms that are significant in individual documents relative to the corpus.
                            <br />
                             <strong>Improving Search Results:</strong> Enhances the relevance of search results by focusing on important keywords.
                            <br />
                             <strong>Feature Selection:</strong> Useful for selecting features in text classification tasks by highlighting important terms.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Applications of TF-IDF</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                             <strong>Information Retrieval:</strong> Used in search engines to rank documents based on the relevance of terms.
                            <br />
                             <strong>Text Mining:</strong> Helps in extracting important terms from large collections of text.
                            <br />
                             <strong>Document Classification:</strong> Used as a feature in machine learning models for text classification.
                            <br />
                             <strong>Recommender Systems:</strong> Improves recommendation algorithms by identifying key terms in user-generated content.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
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

export default TFIDFExplanation;
