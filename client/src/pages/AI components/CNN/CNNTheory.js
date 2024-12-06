import React from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const CnnExplanation = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">CNN Theory</li>
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
                          <strong>Convolutional Neural Networks (CNN): Comprehensive Explanation</strong>
                        </Typography>

                        {/* Overview Section */}
                        <Card variant="outlined" sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Overview
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              Convolutional Neural Networks (CNNs) are a specialized class of deep learning models designed to analyze structured grid-like data, such as images and videos. CNNs leverage the spatial structure of input data through convolution operations, which automatically extract features from the raw input, such as edges, textures, and higher-level objects.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              CNNs consist of several layers, including convolutional layers, pooling layers, and fully connected layers. These layers work together to process and extract spatial hierarchies from data, enabling CNNs to achieve state-of-the-art performance in tasks like image classification, object detection, and semantic segmentation.
                            </Typography>
                          </CardContent>
                        </Card>

                        {/* Convolutional Layer Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">1. Convolutional Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> The convolutional layer is the fundamental building block of CNNs. It applies convolution operations to the input data using learnable filters (also known as kernels). Each filter slides across the input and computes a dot product between the filter’s weights and the section of the input it covers, producing a feature map.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Purpose:</strong> The convolutional layer helps in extracting local spatial patterns, such as edges, corners, and textures from the input image. As the model progresses through layers, higher-level features (such as objects or faces) are learned.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Detailed Example:</strong> In an image classification task, the first few convolutional layers might detect simple features like horizontal and vertical edges. Subsequent layers detect more complex features, such as textures and shapes. By stacking convolutional layers, CNNs can capture spatial hierarchies, meaning lower layers learn basic features and higher layers learn more abstract features.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Code Snippet:</strong> The following example shows how to add a convolutional layer using Keras in TensorFlow. The layer applies 32 filters of size 3x3 with ReLU activation to an input image of size 64x64x3 (RGB image).
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import Conv2D
from tensorflow.keras.models import Sequential

model = Sequential()
model.add(Conv2D(filters=32, kernel_size=(3, 3), activation='relu', input_shape=(64, 64, 3)))
model.summary()`} 
                            />
                            <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                              In this example, 32 filters of size 3x3 are used to perform convolution. The `input_shape` parameter defines the size of the input image (64x64 with 3 color channels). The `relu` activation introduces non-linearity, ensuring the network can model complex functions.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Visual Example:</strong> Imagine a filter detecting edges. When this filter is applied to an image, it slides over the input and activates where it detects an edge, highlighting areas of the image where changes in intensity occur.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`# Example of detecting vertical edges using a simple 3x3 filter
import numpy as np

image = np.array([[255, 255, 255, 255],
                  [255,   0,   0, 255],
                  [255, 255, 255, 255],
                  [255, 255, 255, 255]])

filter = np.array([[-1, 0, 1],
                   [-1, 0, 1],
                   [-1, 0, 1]])

output = np.zeros((2, 2))

for i in range(2):
    for j in range(2):
        region = image[i:i+3, j:j+3]
        output[i, j] = np.sum(region * filter)

print(output)
# Output: This would highlight vertical edges in the image.`}
                            />
                          </AccordionDetails>
                        </Accordion>

                        {/* Activation Function Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">2. Activation Function</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Activation functions introduce non-linearity into the model. This is essential because without them, the model would simply be a linear function, regardless of how many layers it contains. Common activation functions include ReLU (Rectified Linear Unit), Sigmoid, and Tanh, but ReLU is most commonly used in CNNs due to its simplicity and effectiveness.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>ReLU:</strong> ReLU works by setting all negative values to zero and keeping positive values unchanged. This simple operation dramatically speeds up training and helps mitigate issues like the vanishing gradient problem, which can hinder learning in deep networks.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Purpose:</strong> ReLU is used to introduce non-linearity, allowing the network to learn more complex patterns. Without non-linearity, the model would behave as a linear classifier, no matter how deep the network is.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Sigmoid and Tanh:</strong> These functions are less commonly used in modern CNNs due to issues with gradient saturation. However, they are sometimes used in the output layer for binary classification (Sigmoid) or as intermediate activations when specific properties of the activation function are required.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Example Code:</strong> Below is an example of using ReLU activation after a convolutional layer.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import Activation

model.add(Activation('relu'))  # Apply ReLU activation`} 
                            />
                            <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                              ReLU removes all negative values from the output of the previous layer, which allows the network to learn faster and avoid issues with vanishing gradients. Other common activation functions include Softmax (for classification) and Leaky ReLU (an improved version of ReLU).
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Pooling Layer Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">3. Pooling Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Pooling layers reduce the spatial dimensions (width and height) of the input feature maps, making the model computationally efficient while retaining essential information. The most common pooling types are Max Pooling and Average Pooling.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Max Pooling:</strong> Max pooling takes the maximum value from a specified window (e.g., 2x2) in the feature map. It’s the most commonly used pooling technique and is effective at preserving the most important features while reducing spatial dimensions.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Average Pooling:</strong> Average pooling computes the average value in each window, which can smooth out the feature map. However, it’s generally less effective for tasks that rely on sharp features, such as object detection.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Example Code:</strong> Below is an example of adding a max pooling layer to downsample the feature map.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import MaxPooling2D

model.add(MaxPooling2D(pool_size=(2, 2)))  # Applying max pooling to reduce spatial dimensions`} 
                            />
                            <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                              The pooling operation reduces the spatial size of the feature maps, enabling the network to learn representations at a more abstract level.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Fully Connected Layer Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">4. Fully Connected Layer</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Fully connected layers (also known as Dense layers) connect every neuron in one layer to every neuron in the next. These layers are typically found at the end of a CNN, where they combine the features learned by previous layers to make final predictions.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Purpose:</strong> The fully connected layer synthesizes the features extracted by convolutional and pooling layers to perform classification or regression. It's where the model makes its final decision, often using a softmax or sigmoid activation for classification tasks.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Example Code:</strong> Below is an example of adding a fully connected layer with 128 units, followed by an output layer for classification.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import Dense

model.add(Dense(units=128, activation='relu'))  # Fully connected layer
model.add(Dense(units=10, activation='softmax'))  # Output layer with softmax activation for classification`} 
                            />
                            <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                              The softmax activation function is used in the output layer to generate probabilities for each class. In this case, the model is designed to classify inputs into one of 10 possible categories.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Dropout Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">5. Dropout</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Dropout is a regularization technique used to prevent overfitting in deep neural networks. It works by randomly setting a fraction of the input units to zero during training, forcing the network to learn robust features rather than relying too much on any individual neuron.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Purpose:</strong> Dropout improves the generalization capability of the model, reducing overfitting by preventing the co-adaptation of neurons. During training, different subsets of neurons are "dropped," and the model must rely on the remaining neurons to make accurate predictions.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Example Code:</strong> Below is an example of adding a dropout layer with a dropout rate of 50%.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import Dropout

model.add(Dropout(rate=0.5))  # Dropout with a 50% rate`} 
                            />
                            <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                              Dropout is applied during training, but during inference, all neurons are used. This ensures that the model performs optimally when making predictions on unseen data.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        {/* Batch Normalization Section */}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">6. Batch Normalization</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Batch normalization normalizes the inputs to each layer, ensuring that they have a stable distribution during training. This helps accelerate training and improves overall performance by mitigating issues like vanishing and exploding gradients.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Purpose:</strong> Batch normalization stabilizes and accelerates the training process, allowing for higher learning rates and reducing the likelihood of the model getting stuck in local minima.
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Example Code:</strong> Below is an example of applying batch normalization after a convolutional layer.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from tensorflow.keras.layers import BatchNormalization

model.add(BatchNormalization())  # Apply batch normalization to stabilize training`} 
                            />
                          </AccordionDetails>
                        </Accordion>

                        {/* Further Expanded Sections */}
                        {/* Additional sections for Strides, Padding, Flattening, etc. */}

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

export default CnnExplanation;
