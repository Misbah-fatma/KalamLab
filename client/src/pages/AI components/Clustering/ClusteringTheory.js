import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Container,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const ClusteringExplanation = () => {
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
                    <Container maxWidth="xl" sx={{ py: 4 }}>
                      <Typography variant="h4" gutterBottom className="text-center">
                        <strong>Clustering: A Comprehensive Guide with Code Examples</strong>
                      </Typography>

                      {/* Overview Section */}
                      <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Overview
                          </Typography>
                          <Typography variant="body1" paragraph>
                            Clustering is an unsupervised learning technique used to group similar data points based on their characteristics. The primary goal is to identify natural clusters in the data without any prior knowledge of group labels. Clustering is widely used in applications like customer segmentation, document classification, and anomaly detection. There are various clustering algorithms such as K-means, DBSCAN, and Hierarchical clustering, each with its strengths and weaknesses.
                          </Typography>
                        </CardContent>
                      </Card>

                      {/* What is Clustering */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">What is Clustering?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            Clustering refers to the process of dividing a dataset into groups, where data points in the same group (cluster) are more similar to each other than to those in other groups. It is a form of unsupervised learning because it works on unlabeled data.
                          </Typography>
                          <Typography paragraph>
                            Clustering helps uncover the structure within a dataset, enabling meaningful grouping without the need for pre-existing labels. It is used in many real-world applications, such as grouping products in marketing, detecting anomalies in network traffic, and organizing large sets of documents.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Key Concepts in Clustering */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Key Concepts in Clustering</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography component="ol">
                            <li><strong>Centroid-Based Clustering:</strong> Clusters are represented by a centroid (e.g., K-means).</li>
                            <li><strong>Density-Based Clustering:</strong> Clusters are formed based on density (e.g., DBSCAN).</li>
                            <li><strong>Distribution-Based Clustering:</strong> Clusters are assumed to follow a distribution (e.g., Gaussian Mixture Models).</li>
                            <li><strong>Hierarchical Clustering:</strong> Clusters are arranged hierarchically (e.g., Agglomerative Clustering).</li>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Detailed Explanation with Code */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Detailed Explanation of Each Concept</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph>
                            Let's dive deeper into each concept, providing code examples and an understanding of the theory behind them.
                          </Typography>
                        </AccordionDetails>
                          {/* 1. Centroid-Based Clustering: K-Means */}
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>1. Centroid-Based Clustering (K-Means)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography paragraph>
                                K-Means is a popular centroid-based clustering method where data points are grouped into clusters by minimizing the variance within each cluster. The algorithm starts by initializing random centroids, and iteratively refines them until convergence.
                              </Typography>
                              <Typography paragraph>
                                <strong>Python Code Example:</strong>
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.cluster import KMeans
import numpy as np

# Sample Data
X = np.array([[1, 2], [1, 4], [1, 0],
              [4, 2], [4, 4], [4, 0]])

# KMeans with 2 clusters
kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

# Cluster centers
print(kmeans.cluster_centers_)
# Labels
print(kmeans.labels_)`}
                              />
                              <Typography paragraph>
                                <strong>Parameter Tuning:</strong> K-Means requires specifying the number of clusters (K). Methods such as the "Elbow Method" help determine the optimal K value.
                              </Typography>
                              <Typography paragraph>
                                <strong>Visualization Example:</strong>
                                You can visualize the clusters using libraries like Matplotlib.
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`import matplotlib.pyplot as plt

# Plot the clusters
plt.scatter(X[:, 0], X[:, 1], c=kmeans.labels_, cmap='rainbow')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], color='black')
plt.show()`}
                              />
                            </AccordionDetails>
                          </Accordion>

                          {/* 2. Density-Based Clustering: DBSCAN */}
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>2. Density-Based Clustering (DBSCAN)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography paragraph>
                                DBSCAN is a density-based algorithm that forms clusters based on dense regions of data points. It can detect arbitrarily shaped clusters and is robust against outliers.
                              </Typography>
                              <Typography paragraph>
                                <strong>Python Code Example:</strong>
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.cluster import DBSCAN
import numpy as np

# Sample Data
X = np.array([[1, 2], [2, 2], [2, 3], 
              [8, 7], [8, 8], [25, 80]])

# DBSCAN Clustering
dbscan = DBSCAN(eps=3, min_samples=2)
dbscan.fit(X)

# Labels
print(dbscan.labels_)`}
                              />
                              <Typography paragraph>
                                <strong>Parameter Tuning:</strong> DBSCAN requires the `eps` (radius) and `min_samples` parameters to define dense regions. These values significantly impact the result.
                              </Typography>
                              <Typography paragraph>
                                <strong>Visualization Example:</strong>
                                Visualizing the clusters helps interpret the output.
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`import matplotlib.pyplot as plt

# Plot DBSCAN clusters
plt.scatter(X[:, 0], X[:, 1], c=dbscan.labels_, cmap='rainbow')
plt.show()`}
                              />
                            </AccordionDetails>
                          </Accordion>

                          {/* 3. Distribution-Based Clustering: GMM */}
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>3. Distribution-Based Clustering (Gaussian Mixture Models)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography paragraph>
                                GMM assumes that the data is generated from a mixture of Gaussian distributions. It assigns probabilities to each data point for belonging to each cluster, making it suitable for "soft clustering."
                              </Typography>
                              <Typography paragraph>
                                <strong>Python Code Example:</strong>
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.mixture import GaussianMixture
import numpy as np

# Sample Data
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# GMM Clustering
gmm = GaussianMixture(n_components=2)
gmm.fit(X)

# Predict cluster membership
labels = gmm.predict(X)
print(labels)`}
                              />
                              <Typography paragraph>
                                <strong>Visualization:</strong>
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`# Visualization of Gaussian Mixture Model clusters
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='rainbow')
plt.show()`}
                              />
                            </AccordionDetails>
                          </Accordion>

                          {/* 4. Hierarchical Clustering */}
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>4. Hierarchical Clustering</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography paragraph>
                                Hierarchical clustering builds a hierarchy of clusters using either a bottom-up (agglomerative) or top-down (divisive) approach. It doesn’t require specifying the number of clusters beforehand and provides a tree-like structure (dendrogram).
                              </Typography>
                              <Typography paragraph>
                                <strong>Python Code Example:</strong>
                              </Typography>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.cluster import AgglomerativeClustering
import numpy as np

# Sample Data
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# Agglomerative Clustering
hc = AgglomerativeClustering(n_clusters=2)
hc.fit(X)

# Labels
print(hc.labels_)`}
                              />
                              <Typography paragraph>
                                <strong>Dendrogram Example:</strong>
                                Dendrograms are helpful for visualizing the hierarchy.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </Accordion>

                        {/* Error Handling & Preprocessing */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Error Handling & Preprocessing</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography paragraph>
                              Clustering performance can be significantly impacted by the quality of data. Common issues such as missing values, outliers, or poorly scaled data can lead to poor clustering results.
                            </Typography>
                            <Typography paragraph>
                              <strong>Code Example for Data Preprocessing:</strong>
                              Below is a preprocessing example that handles missing values, scales data, and detects outliers.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import pandas as pd
from sklearn.preprocessing import StandardScaler

# Handling Missing Values
data = pd.DataFrame(X)
data.fillna(method='ffill', inplace=True)

# Scaling Data
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)

# Outlier Detection
from sklearn.ensemble import IsolationForest
clf = IsolationForest(contamination=0.1)
outliers = clf.fit_predict(scaled_data)
print(outliers)`}
                            />
                          </AccordionDetails>
                        </Accordion>

                        {/* Real-World Case Studies */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Real-World Case Studies</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography paragraph>
                              Clustering has numerous real-world applications. Below are case studies highlighting the use of clustering in customer segmentation and anomaly detection.
                            </Typography>
                            <Accordion>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>1. Customer Segmentation in Marketing</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography paragraph>
                                  Businesses use clustering techniques like K-Means to group customers based on purchasing behavior. By targeting different customer segments, marketing campaigns can be personalized, increasing conversion rates.
                                </Typography>
                                <CodeSnippet
                                  language="python"
                                  code={`# Example: Customer Segmentation
import pandas as pd
from sklearn.cluster import KMeans

# Sample customer data
data = {'Age': [25, 34, 45, 50],
        'Annual Income (k$)': [50, 70, 80, 60],
        'Spending Score': [60, 80, 90, 50]}

df = pd.DataFrame(data)
kmeans = KMeans(n_clusters=2)
kmeans.fit(df)

# Visualize the customer segments
plt.scatter(df['Age'], df['Annual Income (k$)'], c=kmeans.labels_)
plt.show()`}
                                />
                              </AccordionDetails>
                            </Accordion>

                            <Accordion>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>2. Anomaly Detection in Finance</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography paragraph>
                                  Clustering is also used in anomaly detection to identify suspicious activities, such as fraudulent transactions in banking systems. Algorithms like DBSCAN and Isolation Forest are commonly used for this purpose.
                                </Typography>
                                <CodeSnippet
                                  language="python"
                                  code={`# Example: Anomaly Detection using DBSCAN
from sklearn.cluster import DBSCAN

# Sample financial transaction data
X = np.array([[1, 2], [2, 3], [8, 7], [25, 80]])

# DBSCAN for anomaly detection
dbscan = DBSCAN(eps=3, min_samples=2)
dbscan.fit(X)

# Detect outliers
outliers = dbscan.labels_ == -1
print("Outliers:", outliers)`}
                                />
                              </AccordionDetails>
                            </Accordion>
                          </AccordionDetails>
                        </Accordion>

                        {/* Future of Clustering */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Future of Clustering</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography paragraph>
                              As data becomes increasingly complex and high-dimensional, clustering techniques are evolving. Advances in deep learning, such as deep clustering, are expected to revolutionize how we approach unsupervised learning in the future. Deep clustering combines deep neural networks with traditional clustering methods to learn more meaningful representations of data.
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

export default ClusteringExplanation;
