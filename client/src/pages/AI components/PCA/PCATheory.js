import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const PCAInfo = () => {
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
                        <Typography variant="h4" gutterBottom className='text-center mt-4'>
                          <strong>Principal Component Analysis (PCA): A Detailed Guide</strong>
                        </Typography>

                        {/* Overview Section */}
                        <Card variant="outlined" sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Overview
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Principal Component Analysis (PCA)</strong> is a powerful linear dimensionality reduction technique used to simplify complex high-dimensional datasets while retaining as much variance as possible. PCA transforms correlated features into a set of linearly uncorrelated principal components. This helps in reducing the number of features while maintaining the majority of the dataset’s variance, making it especially useful for visualization, noise reduction, and enhancing the performance of machine learning algorithms.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              PCA is widely used in fields such as machine learning, computer vision, bioinformatics, finance, and any domain where high-dimensional data exists. By projecting data onto a lower-dimensional subspace, PCA helps uncover hidden patterns that would otherwise be difficult to detect.
                            </Typography>
                          </CardContent>
                        </Card>

                        {/* Working Principles of PCA */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Working Principles of PCA</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              PCA works through several mathematical steps that reduce the dimensions of the dataset while preserving its structure. Here's a breakdown of the major steps involved:
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>1. Data Collection:</strong> The dataset should contain multiple variables/features that might be correlated. For instance, in marketing data, customer demographics such as age, income, and expenditure patterns could be used.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>2. Data Preprocessing:</strong> Preprocessing is crucial for PCA. It includes:
                              <ul>
                                <li><strong>Cleaning:</strong> Handling missing values, outliers, and ensuring data quality.</li>
                                <li><strong>Standardization:</strong> Standardizing the features to have a mean of zero and unit variance ensures that PCA is not biased by the different scales of features. This is done using methods like Z-score normalization.</li>
                              </ul>
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from sklearn.preprocessing import StandardScaler

# Example data
data = [[5, 20], [3, 15], [6, 25], [7, 30], [4, 10]]

# Standardize the data
scaler = StandardScaler()
standardized_data = scaler.fit_transform(data)
print(standardized_data)
`}
                            />
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              In this code, the features are standardized using the <code>StandardScaler()</code> method from sklearn, ensuring that the data is normalized before PCA is applied.
                            </Typography>

                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>3. Covariance Matrix Computation:</strong> Calculate the covariance matrix to examine the relationships between variables. The covariance matrix helps in identifying how variables change together. Positive covariance means that two variables increase together, while negative covariance indicates an inverse relationship.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import numpy as np

# Covariance matrix computation
cov_matrix = np.cov(standardized_data.T)
print("Covariance Matrix:\n", cov_matrix)
`}
                            />
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              The covariance matrix allows us to understand the correlations between features and is essential for determining principal components.
                            </Typography>

                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>4. Eigenvalue and Eigenvector Calculation:</strong> Next, the eigenvalues and eigenvectors of the covariance matrix are computed. The eigenvectors represent the directions of the principal components, while the eigenvalues represent the magnitude or importance of these components.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`# Eigenvalues and eigenvectors
eig_values, eig_vectors = np.linalg.eig(cov_matrix)
print("Eigenvalues:\n", eig_values)
print("Eigenvectors:\n", eig_vectors)
`}
                            />
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              Eigenvalues determine the amount of variance explained by each principal component, and eigenvectors give the direction of these components.
                            </Typography>

                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>5. Principal Component Selection:</strong> The principal components are ranked in descending order based on their eigenvalues. Only the top k components, which capture the most variance, are selected. This is where dimensionality reduction happens.
                            </Typography>

                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>6. Transformation:</strong> The original data is projected onto the new subspace formed by the principal components. This reduced feature set contains most of the important information but in fewer dimensions.
                            </Typography>

                            <CodeSnippet
                              language="python"
                              code={`# Projecting data onto the principal components
pca_data = standardized_data.dot(eig_vectors.T)
print("Projected Data:\n", pca_data)
`}
                            />

                            {/* Old Example that was not to be removed */}
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Deployment:</strong> Use the transformed features for further analysis or as input to other machine learning models.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              <strong>Python Code Example:</strong>
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# Sample Data
data = np.array([[2.5, 2.4],
                 [0.5, 0.7],
                 [2.2, 2.9],
                 [1.9, 2.2],
                 [3.1, 3.0],
                 [2.3, 2.7],
                 [2, 1.6],
                 [1, 1.1],
                 [1.5, 1.6],
                 [1.1, 0.9]])

# Standardize the Data
scaler = StandardScaler()
data_std = scaler.fit_transform(data)

# Apply PCA
pca = PCA(n_components=2)
principal_components = pca.fit_transform(data_std)

print('Explained Variance Ratio:', pca.explained_variance_ratio_)
print('Principal Components:\n', principal_components)
`}
                            />
                            <Typography variant="body1" paragraph>
                              In this code, PCA is applied to the standardized data to extract the two most important principal components.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* When to Use PCA */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">When to Use PCA</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              PCA is highly useful in the following scenarios:
                              <ul>
                                <li><strong>High-Dimensional Data:</strong> When datasets have a large number of features and dimensionality reduction is needed to visualize or analyze the data more effectively.</li>
                                <li><strong>Feature Correlation:</strong> When there is a high correlation between features, PCA helps in removing redundancy and extracting the most important features.</li>
                                <li><strong>Noise Reduction:</strong> By focusing on the principal components that explain the majority of variance, PCA can help reduce noise in data.</li>
                                <li><strong>Visualizing Data:</strong> PCA is often used to reduce the dimensions of a dataset to 2D or 3D for visualization.</li>
                                <li><strong>Preprocessing:</strong> It serves as a preprocessing step for machine learning algorithms to avoid overfitting or to simplify the data.</li>
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Why PCA is Important */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Why PCA is Important</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              PCA provides several key benefits:
                              <ul>
                                <li><strong>Dimensionality Reduction:</strong> Reduces the number of features while preserving the essential patterns in the dataset, making it easier to handle and analyze large datasets.</li>
                                <li><strong>Noise Reduction:</strong> By focusing on the most important features, PCA helps in reducing irrelevant or noisy data.</li>
                                <li><strong>Better Visualization:</strong> PCA is often used for projecting high-dimensional data into two or three dimensions, making it easier to visualize.</li>
                                <li><strong>Improved Model Performance:</strong> PCA enhances machine learning algorithms by reducing the number of input variables, which can help prevent overfitting, especially when dealing with high-dimensional data.</li>
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Common Steps in PCA */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Common Steps in PCA</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              The common steps in applying PCA include:
                              <ul>
                                <li><strong>Standardization:</strong> Ensuring that features have a mean of zero and a variance of one, so that PCA is not biased by different scales of features.</li>
                                <li><strong>Covariance Matrix Computation:</strong> Identifying the relationships between the features in the dataset through the covariance matrix.</li>
                                <li><strong>Eigenvalue and Eigenvector Calculation:</strong> Determining the directions (eigenvectors) and magnitude (eigenvalues) of the principal components.</li>
                                <li><strong>Principal Component Selection:</strong> Selecting the top k components that explain the most variance in the data.</li>
                                <li><strong>Projection:</strong> Projecting the original data onto the new lower-dimensional subspace formed by the selected principal components.</li>
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Where PCA is Applied */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Where PCA is Applied</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              PCA finds application in various fields:
                              <ul>
                                <li><strong>Image Processing:</strong> Used to reduce the number of pixels in an image while preserving essential features. This is commonly applied in facial recognition and image compression.</li>
                                <li><strong>Genomics:</strong> Applied to genetic data to identify patterns in high-dimensional gene expression datasets, making it easier to detect disease markers or biological pathways.</li>
                                <li><strong>Finance:</strong> PCA is widely used to simplify financial datasets, helping to detect patterns, risks, and trends in stock prices or market behaviors.</li>
                                <li><strong>Marketing:</strong> Used to reduce the number of features in customer data, enabling companies to focus on the most impactful segments and trends for targeted marketing strategies.</li>
                              </ul>
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
    </div>
  );
};

export default PCAInfo;
