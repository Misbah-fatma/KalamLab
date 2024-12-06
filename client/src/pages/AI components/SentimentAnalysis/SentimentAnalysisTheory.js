import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const SentimentAnalysisExplanation = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">Sentiment Analysis Theory</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <Container maxWidth="xl" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                        <Typography variant="h4" gutterBottom className='text-center mt-4'>
                          <strong>Sentiment Analysis: Detailed Explanation</strong>
                        </Typography>

                        <Card variant="outlined" sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="h5" gutterBottom>
                              Overview
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Sentiment Analysis</strong>, also known as opinion mining, is a field within natural language processing (NLP) that involves determining the sentiment expressed in a piece of text. The sentiment can be classified into categories such as positive, negative, or neutral. More granular emotions, such as joy, anger, sadness, etc., can also be identified.
                            </Typography>
                          </CardContent>
                        </Card>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Key Concepts in Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="subtitle1" gutterBottom>
                              1. Sentiment Classification
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Classifies the overall sentiment of a text as positive, negative, or neutral.<br />
                              <strong>Purpose:</strong> Helps in understanding general opinions and trends from a large set of texts.<br />
                              <strong>Example:</strong> "I love this product!" - Positive
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from textblob import TextBlob

text = "I love this product!"
blob = TextBlob(text)
sentiment = blob.sentiment.polarity  # Returns a value between -1.0 (negative) and 1.0 (positive)

if sentiment > 0:
    print("Positive")
elif sentiment < 0:
    print("Negative")
else:
    print("Neutral")`}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                              2. Aspect-Based Sentiment Analysis
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Analyzes sentiments related to specific aspects or features within the text.<br />
                              <strong>Purpose:</strong> Provides more detailed insights by focusing on particular attributes of a product or service.<br />
                              <strong>Example:</strong> "The battery life is great, but the screen resolution is poor." - Battery life: Positive, Screen resolution: Negative
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import spacy

nlp = spacy.load('en_core_web_sm')
text = "The battery life is great, but the screen resolution is poor."
doc = nlp(text)

for sent in doc.sents:
    if "battery life" in sent.text:
        print("Battery life sentiment:", TextBlob(sent.text).sentiment.polarity)
    if "screen resolution" in sent.text:
        print("Screen resolution sentiment:", TextBlob(sent.text).sentiment.polarity)`}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                              3. Fine-Grained Sentiment Analysis
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Assigns sentiment scores on a scale (e.g., 1 to 5 stars).<br />
                              <strong>Purpose:</strong> Offers more nuanced sentiment information compared to simple positive/negative classification.<br />
                              <strong>Example:</strong> "The movie was amazing!" - 5 stars
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from textblob import TextBlob

text = "The movie was amazing!"
blob = TextBlob(text)
polarity = blob.sentiment.polarity

# Mapping polarity to a 5-star rating
if polarity > 0.8:
    print("5 stars")
elif polarity > 0.6:
    print("4 stars")
elif polarity > 0.4:
    print("3 stars")
elif polarity > 0.2:
    print("2 stars")
else:
    print("1 star")`}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                              4. Emotion Detection
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Identifies specific emotions expressed in the text (e.g., joy, anger, sadness).<br />
                              <strong>Purpose:</strong> Provides deeper emotional insights beyond basic sentiment.<br />
                              <strong>Example:</strong> "I am so happy with the service!" - Joy
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from transformers import pipeline

# Load a pre-trained emotion detection model
classifier = pipeline('sentiment-analysis', model='bhadresh-savani/distilbert-base-uncased-emotion')

text = "I am so happy with the service!"
emotion = classifier(text)[0]
print(f"Detected emotion: {emotion['label']} with score: {emotion['score']}")`}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                              5. Subjectivity/Objectivity Identification
                            </Typography>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                              <strong>Function:</strong> Determines whether a text is subjective (expressing personal opinions) or objective (stating facts).<br />
                              <strong>Purpose:</strong> Helps differentiate between opinion-based and fact-based content.<br />
                              <strong>Example:</strong> "The car is red." - Objective, "I think the car looks great." - Subjective
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`from textblob import TextBlob

text_objective = "The car is red."
text_subjective = "I think the car looks great."

blob_obj = TextBlob(text_objective)
blob_subj = TextBlob(text_subjective)

print(f"Objective text subjectivity: {blob_obj.sentiment.subjectivity}")
print(f"Subjective text subjectivity: {blob_subj.sentiment.subjectivity}")`}
                            />
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">How Sentiment Analysis Works</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              <ListItem>
                                <ListItemText primary="Data Collection: Gather text data from various sources such as reviews, social media, articles, etc." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`import requests

# Example of collecting data from an API
url = "https://api.yelp.com/v3/businesses/{id}/reviews"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get(url, headers=headers)

reviews = response.json()
print(reviews)`}
                              />
                              <ListItem>
                                <ListItemText primary="Preprocessing: Clean and preprocess the text data (e.g., tokenization, stop word removal, stemming/lemmatization)." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

text = "I love this product! It's absolutely wonderful."
tokens = word_tokenize(text)
tokens = [word for word in tokens if word.isalpha()]  # Remove punctuation
tokens = [word for word in tokens if word.lower() not in stopwords.words('english')]  # Remove stop words

lemmatizer = WordNetLemmatizer()
tokens = [lemmatizer.lemmatize(word) for word in tokens]
print(tokens)`}
                              />
                              <ListItem>
                                <ListItemText primary="Feature Extraction: Extract relevant features from the text data (e.g., n-grams, word embeddings)." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.feature_extraction.text import CountVectorizer

corpus = ["I love this product", "This is the best product ever", "I am not happy with this product"]
vectorizer = CountVectorizer(ngram_range=(1, 2))
X = vectorizer.fit_transform(corpus)

print(vectorizer.get_feature_names_out())
print(X.toarray())`}
                              />
                              <ListItem>
                                <ListItemText primary="Model Building: Train machine learning or deep learning models on the processed data." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# Example training a Naive Bayes classifier
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = MultinomialNB()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")`}
                              />
                              <ListItem>
                                <ListItemText primary="Evaluation: Evaluate the performance of the models using appropriate metrics." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`from sklearn.metrics import classification_report

print(classification_report(y_test, y_pred))`}
                              />
                              <ListItem>
                                <ListItemText primary="Deployment: Deploy the trained models for real-world applications (e.g., sentiment analysis tools, customer feedback systems)." />
                              </ListItem>
                              <CodeSnippet
                                language="python"
                                code={`import joblib

# Save the model
joblib.dump(model, 'sentiment_model.pkl')

# Load the model for deployment
model = joblib.load('sentiment_model.pkl')
new_reviews = ["I hate this product", "This is amazing!"]
X_new = vectorizer.transform(new_reviews)
predictions = model.predict(X_new)
print(predictions)`}
                              />
                            </List>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">When to Use Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                               When analyzing customer feedback, reviews, and social media content to understand public opinion.<br />
                               In applications that require monitoring and understanding sentiment trends over time.<br />
                               Examples include brand monitoring, market research, and customer service analysis.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import pandas as pd

# Example of analyzing sentiment trends over time
df = pd.DataFrame({
    'date': pd.date_range(start='1/1/2023', periods=5, freq='M'),
    'sentiment': [0.1, 0.2, -0.1, 0.3, 0.4]
})
df.set_index('date', inplace=True)
df['sentiment'].plot(title='Sentiment Trend Over Time')`}
                            />
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Why Sentiment Analysis is Important</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                               <strong>Understanding Customer Opinions:</strong> Provides insights into customer opinions and experiences.<br />
                               <strong>Improving Products/Services:</strong> Helps identify strengths and weaknesses of products or services based on customer feedback.<br />
                               <strong>Monitoring Brand Reputation:</strong> Enables companies to monitor and manage their brand reputation in real-time.<br />
                               <strong>Enhancing Customer Experience:</strong> Allows businesses to address customer concerns and improve their overall experience.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import matplotlib.pyplot as plt

# Example of monitoring brand reputation using sentiment analysis
brands = ['Brand A', 'Brand B', 'Brand C']
sentiments = [0.6, 0.3, -0.2]  # Average sentiment scores

plt.bar(brands, sentiments)
plt.title('Brand Sentiment Analysis')
plt.xlabel('Brands')
plt.ylabel('Sentiment Score')
plt.show()`}
                            />
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Applications of Sentiment Analysis</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                               <strong>Customer Feedback Analysis:</strong> Analyzes customer reviews and feedback to understand sentiment towards products or services.<br />
                               <strong>Social Media Monitoring:</strong> Monitors social media platforms to gauge public sentiment towards brands, events, or topics.<br />
                               <strong>Market Research:</strong> Provides insights into market trends and consumer preferences.<br />
                               <strong>Reputation Management:</strong> Helps in managing and improving brand reputation based on public sentiment.<br />
                               <strong>Product Development:</strong> Guides product development and improvement by analyzing customer opinions and suggestions.
                            </Typography>
                            <CodeSnippet
                              language="python"
                              code={`import tweepy

# Example of social media monitoring using Twitter API
auth = tweepy.OAuth1UserHandler('consumer_key', 'consumer_secret', 'access_token', 'access_token_secret')
api = tweepy.API(auth)

tweets = api.search(q='BrandX', count=10)
for tweet in tweets:
    print(tweet.text)`}
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
    </div>
  );
}

export default SentimentAnalysisExplanation;
