import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const RegressionInfo = () => {
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
                    <Container>
                      <Typography variant="h4" gutterBottom className='text-center mt-4'>
                        <strong>REGRESSION: Detailed Explanation</strong>
                      </Typography>

                      {/* Overview Section */}
                      <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Overview
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Regression analysis</strong> is a statistical method used to model the relationship between a dependent variable (also known as the target or outcome variable) and one or more independent variables (predictors or features). Regression models are essential for predicting continuous outcomes, such as house prices, stock market trends, and weather forecasts. The aim is to identify the strength of the relationship between variables, make predictions, and generate insights about the underlying data patterns.
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            The basic form of regression, <strong>Linear Regression</strong>, assumes a linear relationship between the input features and the target variable, fitting a line through the data. More advanced forms, such as <strong>Polynomial Regression</strong>, handle non-linear relationships. Regression models are vital in domains like finance, marketing, healthcare, and machine learning, where forecasting is crucial.
                          </Typography>
                        </CardContent>
                      </Card>

                      {/* Working Principles of Regression */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Working Principles of Regression</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Data Collection:</strong> The first step in regression modeling is gathering data that contains both features (independent variables) and the target variable (dependent variable). For example, in predicting house prices, the independent variables could include the number of bedrooms, square footage, location, and the target variable would be the price of the house.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import pandas as pd

# Example of data collection using pandas
data = pd.read_csv('house_prices.csv')
X = data[['bedrooms', 'size', 'location']]
y = data['price']`}
                          />
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Data Preprocessing:</strong> Preprocessing is a crucial step in preparing the data for a regression model. This involves:
                            <ul>
                              <li>Cleaning the dataset by handling missing values and removing duplicates.</li>
                              <li>Normalizing or standardizing the features to ensure that all input variables contribute equally, especially when using gradient-based algorithms like Linear Regression.</li>
                              <li>Encoding categorical variables into numerical values, usually done using <strong>One-Hot Encoding</strong> or <strong>Label Encoding</strong>. For example, the "location" feature might need to be transformed into a set of binary variables if it’s categorical.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Example of preprocessing pipeline
numeric_features = ['bedrooms', 'size']
numeric_transformer = Pipeline(steps=[('scaler', StandardScaler())])

categorical_features = ['location']
categorical_transformer = Pipeline(steps=[('encoder', OneHotEncoder(handle_unknown='ignore'))])

preprocessor = ColumnTransformer(
    transformers=[('num', numeric_transformer, numeric_features), ('cat', categorical_transformer, categorical_features)]
)

X_preprocessed = preprocessor.fit_transform(X)`}
                          />
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Feature Selection/Extraction:</strong> In this step, we either select the most important features that have a strong correlation with the target variable or create new features through techniques like <strong>Polynomial Features</strong>. By focusing on the most relevant variables, we can improve the model's performance and simplify interpretation.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.feature_selection import SelectKBest, f_regression

# Example of feature selection
selector = SelectKBest(score_func=f_regression, k=2)
X_selected = selector.fit_transform(X_preprocessed, y)`}
                          />

                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Model Selection:</strong> Choosing the right regression algorithm depends on the type of data and the complexity of the relationship between variables. Some common regression algorithms include:
                            <ul>
                              <li><strong>Linear Regression</strong>: Assumes a linear relationship between input features and the target variable. It's the simplest regression method but works best with linear data.</li>
                              <li><strong>Polynomial Regression</strong>: Extends linear regression by fitting a polynomial equation to the data, suitable for modeling non-linear relationships.</li>
                              <li><strong>Decision Trees</strong>: A tree-based model that splits data into smaller subsets to make predictions, suitable for both regression and classification tasks.</li>
                              <li><strong>Random Forest Regression</strong>: An ensemble method that averages multiple decision trees to improve accuracy and reduce overfitting.</li>
                              <li><strong>Support Vector Regression (SVR)</strong>: An extension of Support Vector Machines for predicting continuous variables, especially in high-dimensional spaces.</li>
                              <li><strong>Neural Networks</strong>: Used for complex regression tasks, where non-linear relationships exist and require deep learning techniques.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.linear_model import LinearRegression

# Example of model selection using Linear Regression
model = LinearRegression()
model.fit(X_selected, y)`}
                          />

                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Training the Model:</strong> Once the model is selected, it is trained using the input features and the target values. The training process involves finding the optimal parameters (e.g., coefficients in linear regression) that minimize the prediction error.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Training the model
model.fit(X_train, y_train)`}
                          />

                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Evaluation:</strong> After training, it’s essential to evaluate the model’s performance on unseen data (test set). The common evaluation metrics for regression models include:
                            <ul>
                              <li><strong>Mean Absolute Error (MAE)</strong>: The average of the absolute differences between the predicted and actual values.</li>
                              <li><strong>Mean Squared Error (MSE)</strong>: The average of the squared differences between the predicted and actual values.</li>
                              <li><strong>Root Mean Squared Error (RMSE)</strong>: The square root of the mean squared error, providing a more interpretable error metric.</li>
                              <li><strong>R-squared (R²)</strong>: A measure of how well the model fits the data. It represents the proportion of the variance in the dependent variable that is predictable from the independent variables.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Model evaluation
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = mse ** 0.5
r2 = r2_score(y_test, y_pred)

print(f'MAE: {mae}, MSE: {mse}, RMSE: {rmse}, R2: {r2}')`}
                          />

                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Hyperparameter Tuning:</strong> Hyperparameters are model parameters that are set before the learning process begins. Tuning these hyperparameters can improve model performance. Popular techniques include <strong>Grid Search</strong> and <strong>Random Search</strong>.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.model_selection import GridSearchCV

# Example of hyperparameter tuning with grid search
param_grid = {'fit_intercept': [True, False], 'normalize': [True, False]}
grid_search = GridSearchCV(estimator=model, param_grid=param_grid, cv=5)
grid_search.fit(X_train, y_train)
best_model = grid_search.best_estimator_`}
                          />

                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Deployment:</strong> The final step in the regression workflow is deploying the trained model for making predictions on new data. This could be done in a production environment where real-time predictions are required.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of deployment
new_data = [[3, 1500, 'Suburban']]
new_data_transformed = preprocessor.transform(new_data)
prediction = model.predict(new_data_transformed)
print(f'Predicted Price: {prediction[0]}')`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      {/* When to Use Regression */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">When to Use Regression</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Regression should be used in situations where the target variable is continuous (i.e., numeric) rather than categorical. Some common use cases include:
                            <ul>
                              <li>Predicting <strong>house prices</strong> based on features such as location, size, and number of rooms.</li>
                              <li><strong>Temperature forecasting</strong> using historical weather data.</li>
                              <li><strong>Stock price prediction</strong> based on historical stock trends and market indicators.</li>
                              <li><strong>Sales forecasting</strong> for businesses based on past sales data and seasonal trends.</li>
                              <li>Predicting <strong>medical outcomes</strong> such as disease progression over time.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of regression for house price prediction
from sklearn.linear_model import LinearRegression

X = [[1, 1200], [2, 1600], [3, 1800], [4, 2400]]
y = [200000, 300000, 350000, 500000]

model = LinearRegression()
model.fit(X, y)

# Predict the price for a house with 3 bedrooms and 1700 sq ft
price_prediction = model.predict([[3, 1700]])
print(f'Predicted Price: {price_prediction[0]}')`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      {/* Why Regression is Important */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Why Regression is Important</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Regression plays a critical role in various domains for the following reasons:
                            <ul>
                              <li><strong>Prediction:</strong> It enables forecasting future values based on historical trends, which is vital for decision-making in finance, healthcare, and economics.</li>
                              <li><strong>Decision-Making Support:</strong> By understanding the relationship between variables, regression models help in making informed decisions about resource allocation, pricing, and risk management.</li>
                              <li><strong>Insights into Data Relationships:</strong> Regression models allow us to quantify the strength of the relationships between different factors, providing deeper insights into the dynamics of the data.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example showing the importance of regression for decision making
import matplotlib.pyplot as plt

X = [[1], [2], [3], [4], [5]]
y = [15000, 18000, 24000, 29000, 32000]

model = LinearRegression()
model.fit(X, y)

# Predict and plot
y_pred = model.predict(X)
plt.scatter(X, y, color='blue')
plt.plot(X, y_pred, color='red')
plt.title('Sales Prediction')
plt.xlabel('Month')
plt.ylabel('Sales')
plt.show()`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      {/* Common Algorithms for Regression */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Common Algorithms for Regression</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Several algorithms are used to perform regression, depending on the problem's complexity and data structure. Key algorithms include:
                            <ul>
                              <li><strong>Linear Regression:</strong> Assumes a linear relationship between input features and the target variable. It is simple, interpretable, and works well when the data follows a linear trend.</li>
                              <li><strong>Polynomial Regression:</strong> Extends linear regression by fitting a polynomial equation to the data, capturing non-linear relationships more effectively.</li>
                              <li><strong>Decision Trees:</strong> Models that split the data into subsets based on feature values, forming a tree structure. It can handle both regression and classification tasks.</li>
                              <li><strong>Random Forest:</strong> An ensemble method that builds multiple decision trees and averages their predictions, leading to more accurate and robust results.</li>
                              <li><strong>Support Vector Regression (SVR):</strong> A version of Support Vector Machines designed for regression, which finds the optimal hyperplane that best fits the data.</li>
                              <li><strong>Neural Networks:</strong> Complex models capable of learning non-linear relationships through multiple layers of neurons. Neural networks are particularly useful for large datasets with complex patterns.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from sklearn.ensemble import RandomForestRegressor

# Example of model selection using Random Forest Regression
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      {/* How Regression Works */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">How Regression Works</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Regression works by mapping the input features to the target variable. This involves several steps:
                          </Typography>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Input Features:</strong> These are the characteristics or variables of the instances being predicted, such as the size of a house or its location.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of input features in regression
X = [[1, 1500], [2, 2000], [3, 2500]]
y = [200000, 300000, 400000]`}
                          />
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Learning Process:</strong> The model learns the relationships between these features and the target variable through a learning algorithm, adjusting its parameters (e.g., coefficients in linear regression).
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of learning process in regression
model.fit(X_train, y_train)`}
                          />
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            <strong>Prediction:</strong> Once trained, the model can make predictions on new data by applying the learned mapping. For example, given the features of a house, the model predicts the price.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of prediction in regression
price_prediction = model.predict([[3, 1800]])
print(f'Predicted Price: {price_prediction[0]}')`}
                          />
                        </AccordionDetails>
                      </Accordion>

                      {/* Where Regression is Applied */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">Where Regression is Applied</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                            Regression is widely used in various fields, including:
                            <ul>
                              <li><strong>House Price Prediction:</strong> Estimating the price of a house based on its features such as location, size, and number of bedrooms.</li>
                              <li><strong>Temperature Forecasting:</strong> Predicting future temperatures based on historical weather data.</li>
                              <li><strong>Stock Price Prediction:</strong> Forecasting future stock prices based on past trends and financial indicators.</li>
                              <li><strong>Sales Forecasting:</strong> Predicting future sales for a company based on past sales data, promotions, and market trends.</li>
                              <li><strong>Medical Prognosis:</strong> Predicting the progression of diseases or patient outcomes based on historical data and patient characteristics.</li>
                            </ul>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`# Example of application in house price prediction
new_house = [[3, 2500, 'Urban']]
new_house_transformed = preprocessor.transform(new_house)
predicted_price = model.predict(new_house_transformed)
print(f'Predicted Price: {predicted_price[0]}')`}
                          />
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

export default RegressionInfo;
