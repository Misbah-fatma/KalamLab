import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarMl';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const DataVisualizationExplanation = () => {
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
                      <Typography variant="h4" gutterBottom className="text-center mt-4">
                        <strong>Data Visualization Techniques: A Comprehensive Guide with Code Examples</strong>
                      </Typography>

                      {/* Overview Section */}
                      <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Overview
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            Data visualization is a critical component of data analysis, enabling analysts and stakeholders to comprehend complex datasets through graphical representations. By converting raw data into visual formats such as charts, graphs, and maps, visualization techniques facilitate the identification of patterns, trends, and outliers that might be difficult to discern in tabular or textual data. Effective data visualization not only enhances the clarity of insights but also supports data-driven decision-making across various fields, including business intelligence, scientific research, and journalism. Modern visualization libraries like Matplotlib, Seaborn, and Plotly offer robust tools for creating both static and interactive visualizations, catering to diverse analytical needs and preferences.
                          </Typography>
                        </CardContent>
                      </Card>

                      {/* Pie Chart */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">1. Pie Chart</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A pie chart is a circular graph divided into slices to represent numerical proportions. Each slice's size is proportional to the quantity it represents, providing a visual depiction of data distribution.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Pie charts are used to illustrate the relative sizes of parts to a whole. They are particularly effective for showing percentages or proportional data, making it easy to compare different categories at a glance.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Visualizing the distribution of market share among different companies where each slice represents a company's percentage of total market share.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> Each slice corresponds to a category, and its angle or area reflects the proportion of that category relative to the total. Labels or percentages are often added to enhance readability and provide precise values.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Exploded Pie Chart:</strong> A pie chart where one or more slices are separated from the rest for emphasis.</li>
                              <li><strong>Donut Chart:</strong> Similar to a pie chart but with a central hole, allowing for additional information to be displayed in the center.</li>
                              <li><strong>3D Pie Chart:</strong> A pie chart with a three-dimensional appearance, enhancing visual appeal but sometimes distorting perception of proportions.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data to plot
labels = 'Category A', 'Category B', 'Category C', 'Category D'
sizes = [20, 30, 25, 25]
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue']
explode = (0.1, 0, 0, 0)  # explode 1st slice

# Plot
plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=140)
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.title('Market Share Distribution')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            In this example, a pie chart is created using Matplotlib in Python. The `explode` parameter is used to highlight the first category by separating it from the rest. The `autopct` parameter displays the percentage value on each slice, enhancing clarity.
                          </Typography>

                          {/* Additional Code Snippets for Pie Chart */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Interactive Pie Chart with Plotly:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import plotly.express as px

# Data to plot
labels = ['Category A', 'Category B', 'Category C', 'Category D']
sizes = [20, 30, 25, 25]

# Create DataFrame
import pandas as pd
df = pd.DataFrame({'Category': labels, 'Size': sizes})

# Plot
fig = px.pie(df, names='Category', values='Size', title='Market Share Distribution',
             hole=0.3, hover_data=['Size'], labels={'Size':'Percentage'})
fig.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This code uses Plotly to create an interactive pie chart with a donut shape (`hole=0.3`). Interactive features like hover information enhance user engagement and provide additional details without cluttering the visualization.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Bar Chart */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">2. Bar Chart</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A bar chart uses rectangular bars to represent data values. The length or height of each bar is proportional to the value it represents, making it easy to compare different categories.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Bar charts are ideal for comparing quantities across discrete categories. They provide a clear visual comparison and are versatile enough to handle various types of data.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Comparing monthly sales figures for different products where each bar represents the sales amount for a specific month.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> Categories or groups are represented on one axis (usually the x-axis for vertical bars or y-axis for horizontal bars), and the corresponding values are represented on the other axis. Each bar's height or length reflects the value it represents, allowing for easy comparison.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Stacked Bar Chart:</strong> Bars are divided into sub-parts, each representing a different category within the main category.</li>
                              <li><strong>Grouped Bar Chart:</strong> Bars for different groups are placed side by side within each category, allowing for comparison between groups.</li>
                              <li><strong>Horizontal Bar Chart:</strong> Similar to vertical bar charts but with horizontal bars, useful when category names are long.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
categories = ['Product A', 'Product B', 'Product C', 'Product D']
values = [50, 30, 45, 60]

# Plot
plt.figure(figsize=(8,6))
plt.bar(categories, values, color='skyblue')
plt.xlabel('Products')
plt.ylabel('Sales')
plt.title('Monthly Sales Data')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This example demonstrates how to create a simple vertical bar chart using Matplotlib in Python. The `figsize` parameter adjusts the size of the plot, and the `color` parameter sets the color of the bars for better visual appeal.
                          </Typography>

                          {/* Additional Code Snippets for Bar Chart */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Grouped Bar Chart with Seaborn:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt
    import pandas as pd
    
    # Sample Data
    data = {
        'Month': ['Jan', 'Jan', 'Feb', 'Feb', 'Mar', 'Mar'],
        'Product': ['A', 'B', 'A', 'B', 'A', 'B'],
        'Sales': [50, 30, 45, 60, 55, 35]
    }
    
    df = pd.DataFrame(data)
    
    # Plot
    sns.barplot(x='Month', y='Sales', hue='Product', data=df)
    plt.title('Monthly Sales by Product')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This code uses Seaborn to create a grouped bar chart, allowing comparison of sales across different products within each month. The `hue` parameter differentiates the bars by product category, making the comparison intuitive.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Histogram */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">3. Histogram</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A histogram is a graphical representation that organizes a group of data points into user-specified ranges or bins. Similar to a bar chart, but specifically designed for continuous data, histograms illustrate the distribution of data.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Histograms are used to visualize the distribution, central tendency, and variability of data. They help identify patterns such as normal distribution, skewness, and the presence of outliers.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Analyzing the distribution of test scores to determine the spread and identify any anomalies.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> Data is divided into bins (intervals), and the frequency of data points within each bin is represented by the height of the corresponding bar. The choice of bin size can affect the visualization's granularity and the insights derived.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Kernel Density Estimation (KDE):</strong> A smoothed version of the histogram that provides a continuous probability density function.</li>
                              <li><strong>Cumulative Histogram:</strong> Shows the cumulative count or frequency up to each bin, useful for understanding the cumulative distribution.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
scores = [55, 62, 63, 70, 75, 80, 85, 85, 90, 92, 95, 96, 98, 100]

# Create histogram
plt.hist(scores, bins=5, color='green', edgecolor='black')
plt.xlabel('Score Range')
plt.ylabel('Frequency')
plt.title('Distribution of Student Scores')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            The histogram example above illustrates the distribution of student scores. By adjusting the number of bins, you can control the granularity of the distribution view, making it easier to spot trends and outliers.
                          </Typography>

                          {/* Additional Code Snippets for Histogram */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Histogram with Seaborn and KDE:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt

    # Data
    scores = [55, 62, 63, 70, 75, 80, 85, 85, 90, 92, 95, 96, 98, 100]

    # Plot histogram with KDE
    sns.histplot(scores, bins=5, kde=True, color='purple')
    plt.xlabel('Score Range')
    plt.ylabel('Frequency')
    plt.title('Distribution of Student Scores with KDE')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This code uses Seaborn to create a histogram with a Kernel Density Estimate (KDE) overlay, providing a smoothed representation of the data distribution.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Scatter Plot */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">4. Scatter Plot</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A scatter plot uses Cartesian coordinates to display values for two variables as points on a two-dimensional graph. Each point represents an individual data point with its position determined by the values of the two variables.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Scatter plots are used to identify and visualize relationships or correlations between two variables. They can reveal patterns, trends, clusters, and outliers in data.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Plotting the relationship between advertising spend and sales revenue to determine if higher advertising leads to increased sales.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> The x-axis represents one variable, and the y-axis represents the other. Each data point is plotted as a dot, and the overall pattern of dots can indicate the nature of the relationship (e.g., positive correlation, negative correlation, or no correlation).
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Trend Line:</strong> A line added to a scatter plot to indicate the overall trend or direction of the data points.</li>
                              <li><strong>Correlation Coefficient:</strong> A statistical measure that describes the strength and direction of the relationship between two variables.</li>
                              <li><strong>Bubble Chart:</strong> An extension of a scatter plot where the size of each point represents a third variable.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
heights = [150, 160, 165, 170, 175, 180, 185, 190]
weights = [55, 60, 63, 65, 70, 72, 78, 80]

# Create scatter plot
plt.scatter(heights, weights, color='red')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.title('Height vs. Weight')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This scatter plot visualizes the relationship between height and weight. Each red dot represents an individual’s height and weight, allowing viewers to observe any correlation between these two variables.
                          </Typography>

                          {/* Additional Code Snippets for Scatter Plot */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Scatter Plot with Trend Line using Seaborn:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt

    # Data
    heights = [150, 160, 165, 170, 175, 180, 185, 190]
    weights = [55, 60, 63, 65, 70, 72, 78, 80]

    # Create scatter plot with regression line
    sns.regplot(x=heights, y=weights, scatter=True, color='blue')
    plt.xlabel('Height (cm)')
    plt.ylabel('Weight (kg)')
    plt.title('Height vs. Weight with Trend Line')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This example uses Seaborn to create a scatter plot with an added regression (trend) line, providing a clearer view of the relationship between height and weight.
                          </Typography>

                          {/* Bubble Chart Example */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Bubble Chart:</strong> An extension of the scatter plot where each point is represented by a bubble whose size corresponds to a third variable.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
heights = [150, 160, 165, 170, 175, 180, 185, 190]
weights = [55, 60, 63, 65, 70, 72, 78, 80]
ages = [25, 30, 35, 40, 45, 50, 55, 60]  # Third variable for bubble size

# Create bubble chart
plt.scatter(heights, weights, s=[age * 2 for age in ages], alpha=0.5, color='green')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.title('Height vs. Weight with Age as Bubble Size')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This bubble chart adds a third dimension (age) by varying the size of each bubble. Larger bubbles represent older individuals, providing additional context to the relationship between height and weight.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Box Plot */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">5. Box Plot (Box-and-Whisker Plot)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A box plot is a standardized way of displaying the distribution of data based on five summary statistics: minimum, first quartile (Q1), median, third quartile (Q3), and maximum. It provides a visual summary of the data’s central tendency and variability.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Box plots are used to identify outliers, compare distributions between different groups, and understand the spread and skewness of data. They are particularly useful in statistical analysis and data reporting.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Visualizing the distribution of salaries across different departments in a company to compare salary ranges and identify any outliers.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> The box represents the interquartile range (IQR), which contains the middle 50% of the data. The line inside the box indicates the median. The "whiskers" extend to the smallest and largest values within 1.5 * IQR from the lower and upper quartiles, respectively. Data points outside this range are considered outliers and are plotted individually.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Violin Plot:</strong> Combines the box plot with a kernel density plot, providing a more detailed view of the data distribution.</li>
                              <li><strong>Whiskers:</strong> Lines that extend from the box to show the range of the data, excluding outliers.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
salaries = [32000, 36000, 34000, 38000, 42000, 46000, 50000, 54000, 58000, 62000]

# Create box plot
plt.boxplot(salaries, patch_artist=True,
            boxprops=dict(facecolor='lightblue', color='blue'),
            medianprops=dict(color='red'),
            whiskerprops=dict(color='blue'),
            capprops=dict(color='blue'),
            flierprops=dict(marker='o', markerfacecolor='red', markersize=5, linestyle='none'))
plt.ylabel('Salary ($)')
plt.title('Salary Distribution')
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This box plot example shows the distribution of salaries. The `patch_artist` parameter fills the box with color, and other properties customize the appearance of the box, median line, whiskers, caps, and outliers (fliers).
                          </Typography>

                          {/* Additional Code Snippets for Box Plot */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Box Plot with Seaborn:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt
    import pandas as pd
    
    # Sample Data
    data = {
        'Department': ['Sales', 'Sales', 'HR', 'HR', 'IT', 'IT'],
        'Salary': [32000, 36000, 34000, 38000, 42000, 46000]
    }
    
    df = pd.DataFrame(data)
    
    # Create box plot
    sns.boxplot(x='Department', y='Salary', data=df, palette='Set2')
    plt.title('Salary Distribution by Department')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            Using Seaborn, this box plot compares the salary distributions across different departments. The `palette` parameter enhances the visual appeal by assigning distinct colors to each department.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Line Chart */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">6. Line Chart</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A line chart connects data points with straight lines, typically used to represent changes or trends over time or another continuous variable.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Line charts are ideal for visualizing trends, patterns, and changes in data over time. They help in identifying upward or downward trends, seasonal variations, and other time-dependent phenomena.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Tracking monthly revenue growth over a year, where each point represents the revenue for a specific month.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> The x-axis typically represents the time variable (e.g., months, years), and the y-axis represents the measured variable (e.g., revenue). Data points are plotted and connected by lines to show the trend.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Multiple Lines:</strong> Plotting multiple lines on the same chart to compare different categories or groups.</li>
                              <li><strong>Area Chart:</strong> Similar to a line chart but with the area below the line filled in, emphasizing the magnitude of change.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import matplotlib.pyplot as plt

# Data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
revenue = [1000, 1200, 1300, 1500, 1600, 1700, 1750, 1800, 1900, 2100, 2200, 2500]

# Create line chart
plt.figure(figsize=(10,6))
plt.plot(months, revenue, marker='o', linestyle='-', color='blue')
plt.xlabel('Month')
plt.ylabel('Revenue ($)')
plt.title('Monthly Revenue Growth')
plt.grid(True)
plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This line chart example tracks revenue growth over twelve months. The `marker` parameter adds markers at each data point, and `linestyle` specifies the type of line connecting the points. The `grid` parameter enhances readability by adding a background grid.
                          </Typography>

                          {/* Additional Code Snippets for Line Chart */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Multiple Line Chart with Seaborn:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt
    import pandas as pd

    # Sample Data
    data = {
        'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'Revenue_A': [1000, 1200, 1300, 1500, 1600, 1700,
                     1750, 1800, 1900, 2100, 2200, 2500],
        'Revenue_B': [800, 950, 1100, 1300, 1400, 1500,
                     1600, 1650, 1700, 2000, 2100, 2400]
    }

    df = pd.DataFrame(data)

    # Melt the DataFrame for Seaborn
    df_melted = df.melt('Month', var_name='Product', value_name='Revenue')

    # Plot
    sns.lineplot(x='Month', y='Revenue', hue='Product', data=df_melted, marker='o')
    plt.xlabel('Month')
    plt.ylabel('Revenue ($)')
    plt.title('Monthly Revenue Growth for Products A and B')
    plt.grid(True)
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This example uses Seaborn to create a multiple line chart, comparing the revenue growth of two products over the same period. The `hue` parameter differentiates the lines by product category, and the `melt` function reshapes the DataFrame to a suitable format for Seaborn.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Heatmap */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">7. Heatmap</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Definition:</strong> A heatmap is a graphical representation of data where individual values are represented as colors in a matrix. It is particularly useful for visualizing complex data relationships and patterns.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Purpose:</strong> Heatmaps are used to identify patterns, correlations, and anomalies within large datasets. They are commonly used in fields like bioinformatics, market research, and website analytics to visualize multi-dimensional data.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Example Use Case:</strong> Creating a correlation matrix heatmap to visualize the relationships between multiple variables in a dataset, such as financial indicators in stock market analysis.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>How It Works:</strong> Heatmaps display data in a matrix format where the intensity or color of each cell represents the magnitude of the value. The x-axis and y-axis represent different variables or categories, and the color gradient helps in quickly identifying areas of high or low values.
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Correlation Matrix:</strong> A table showing correlation coefficients between variables, often visualized using a heatmap.</li>
                              <li><strong>Clustermap:</strong> A heatmap with dendrograms to show hierarchical clustering of rows and columns.</li>
                              <li><strong>Interactive Heatmaps:</strong> Heatmaps that allow users to interact with the data points, such as zooming, panning, and displaying tooltips.</li>
                            </ul>
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Python Code Example:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt
    import pandas as pd

    # Sample Data: Correlation Matrix
    data = sns.load_dataset('flights').pivot('month', 'year', 'passengers')

    # Create heatmap
    plt.figure(figsize=(12,8))
    sns.heatmap(data, annot=True, fmt='d', cmap='coolwarm', linewidths=.5)
    plt.title('Flight Passengers Heatmap')
    plt.xlabel('Year')
    plt.ylabel('Month')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This heatmap example uses Seaborn to visualize the number of passengers across different months and years. The `annot=True` parameter adds the numerical values to each cell, while `fmt='d'` formats the annotations as integers. The `cmap` parameter sets the color palette, enhancing the visual differentiation between high and low values.
                          </Typography>

                          {/* Additional Code Snippets for Heatmap */}
                          <Typography
                            variant="body1"
                            paragraph
                            style={{ textAlign: 'justify' }}
                          >
                            <strong>Clustermap with Seaborn:</strong>
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import seaborn as sns
    import matplotlib.pyplot as plt
    import pandas as pd

    # Sample Data: Correlation Matrix
    data = sns.load_dataset('flights').pivot('month', 'year', 'passengers')

    # Create clustermap
    sns.clustermap(data, annot=True, fmt='d', cmap='viridis', linewidths=.5, standard_scale=1)
    plt.title('Clustermap of Flight Passengers')
    plt.show()`}
                          />
                          <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                            This example demonstrates a clustermap, which not only visualizes the data as a heatmap but also applies hierarchical clustering to both rows and columns. This helps in identifying similar months and years based on passenger counts, revealing underlying patterns.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Additional Sections for Comprehensive Coverage */}
                      {/* Here, you can add more visualization techniques if needed, such as Area Charts, Bubble Charts, Radar Charts, etc. For brevity, we'll stick to the seven core techniques as requested. */}

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

    export default DataVisualizationExplanation;
