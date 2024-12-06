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
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../SideBarAi';
import CodeSnippet from '../CodeSnippet'; // Assuming you have a CodeSnippet component for displaying code

const NlpExplanation = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <Sidebar />
        <div className="app-main-outer">
          <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                  Dashboard
                </Link>
                <Typography color="textPrimary">NLP Theory</Typography>
              </Breadcrumbs>
            </div>
            <br />
            <Container maxWidth="xl" mt={4}>
              <Card sx={{ mb: 5 }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom className="text-center mt-4">
                    <strong>Natural Language Processing (NLP): Detailed Explanation</strong>
                  </Typography>
                  <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Overview
                      </Typography>
                      <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                        <strong>Natural Language Processing (NLP)</strong> is a subfield of artificial intelligence that focuses on enabling computers to understand, process, and generate human (natural) language. NLP bridges the gap between human communication and computer understanding by transforming raw text into structured data that machines can interpret. It plays a key role in various applications, such as chatbots, sentiment analysis, machine translation, and voice recognition.
                      </Typography>
                      <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                        NLP integrates a wide array of tasks and techniques, including tokenization, part-of-speech tagging, sentiment analysis, and machine translation, among others. The ultimate goal is to develop systems that can understand human language with a high level of accuracy and fluency.
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Key Concepts in NLP Section */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Key Concepts in NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Tokenization */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">1. Tokenization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Tokenization is the process of breaking down text into smaller pieces, called tokens. These tokens could be words, subwords, or even characters. 
                            <br />
                            <strong>Purpose:</strong> Tokenization serves as the first step in most NLP tasks because it divides the raw text into manageable units for further processing.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> For the text "Hello, world!", the tokens would be ["Hello", ",", "world", "!"].
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from nltk.tokenize import word_tokenize

text = "Hello, world!"
tokens = word_tokenize(text)
print(tokens)  # Output: ['Hello', ',', 'world', '!']`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> Tokenization can be further broken down into:
                            <ul>
                              <li><strong>Word Tokenization:</strong> Breaks text into individual words.</li>
                              <li><strong>Sentence Tokenization:</strong> Splits text into sentences.</li>
                              <li><strong>Character Tokenization:</strong> Splits text into individual characters (useful in languages like Chinese).</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Stop Word Removal */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">2. Stop Word Removal</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Stop words are common words such as "is", "the", "a", and "in" that frequently occur in text but carry little meaningful information.
                            <br />
                            <strong>Purpose:</strong> Removing stop words helps focus on the content-carrying words and reduces the dimensionality of text, which can improve the performance of NLP models.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> For the sentence "This is a sample sentence.", after stop word removal, we get ["sample", "sentence"].
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

text = "This is a sample sentence."
stop_words = set(stopwords.words('english'))
filtered_sentence = [w for w in word_tokenize(text) if not w in stop_words]
print(filtered_sentence)  # Output: ['sample', 'sentence']`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Custom Stop Words:</strong> You can create a custom list of stop words based on the domain of your text.</li>
                              <li><strong>Domain-Specific Stop Words:</strong> These are words that may not be common in general usage but are frequently used in a specific domain (e.g., "data" in a data science context).</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Stemming and Lemmatization */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">3. Stemming and Lemmatization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Stemming:</strong> Stemming is the process of reducing words to their base form or root by removing suffixes. This is often a heuristic process, which may not always result in valid words.
                            <br />
                            <strong>Example:</strong> "running" is stemmed to "run".
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from nltk.stem import PorterStemmer

ps = PorterStemmer()
word = "running"
stemmed_word = ps.stem(word)
print(stemmed_word)  # Output: 'run'`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Lemmatization:</strong> Lemmatization reduces words to their base or dictionary form, but unlike stemming, it considers the context and returns valid words.
                            <br />
                            <strong>Example:</strong> "better" is lemmatized to "good".
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()
word = "better"
lemmatized_word = lemmatizer.lemmatize(word, pos='a')
print(lemmatized_word)  # Output: 'good'`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Inflectional Morphology:</strong> The process by which a word changes its form to express different grammatical features (e.g., tense, number).</li>
                              <li><strong>Derivational Morphology:</strong> Modifies the base form of words to create new words (e.g., "run" to "runner").</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Part-of-Speech Tagging */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">4. Part-of-Speech Tagging (POS Tagging)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Part-of-Speech tagging involves assigning grammatical categories (such as noun, verb, adjective) to each token in a text.
                            <br />
                            <strong>Purpose:</strong> POS tagging helps to understand the role of each word in a sentence and its grammatical structure.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> For the sentence "He is running", POS tagging results in [('He', 'PRP'), ('is', 'VBZ'), ('running', 'VBG')].
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import nltk

text = "He is running"
tokens = nltk.word_tokenize(text)
pos_tags = nltk.pos_tag(tokens)
print(pos_tags)  # Output: [('He', 'PRP'), ('is', 'VBZ'), ('running', 'VBG')]`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Named Entity Recognition (NER):</strong> Tags named entities such as people, places, and organizations.</li>
                              <li><strong>Chunking:</strong> Groups tagged words into phrases such as noun phrases or verb phrases.</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Named Entity Recognition (NER) */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">5. Named Entity Recognition (NER)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Named Entity Recognition (NER) identifies named entities such as persons, locations, organizations, and more within text data.
                            <br />
                            <strong>Purpose:</strong> NER helps in extracting valuable information from text, enabling deeper analysis.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> For the sentence "Barack Obama was the 44th President of the United States", NER identifies [("Barack Obama", "PERSON"), ("United States", "LOCATION")].
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import nltk

text = "Barack Obama was the 44th President of the United States."
tokens = nltk.word_tokenize(text)
pos_tags = nltk.pos_tag(tokens)
named_entities = nltk.ne_chunk(pos_tags)
print(named_entities)`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Entity Linking:</strong> Involves linking entities mentioned in text to their corresponding entries in a knowledge base (e.g., linking "Barack Obama" to his Wikipedia page).</li>
                              <li><strong>Coreference Resolution:</strong> Identifies which expressions in a text refer to the same entity (e.g., "Barack Obama" and "he").</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Syntax Parsing */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">6. Syntax Parsing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Syntax parsing analyzes the grammatical structure of a sentence and identifies relationships between words.
                            <br />
                            <strong>Types:</strong>
                            <ul>
                              <li><strong>Dependency Parsing:</strong> Determines the syntactic structure of a sentence based on word-to-word relationships.</li>
                              <li><strong>Constituency Parsing:</strong> Breaks down a sentence into its sub-components (constituents), such as noun phrases and verb phrases.</li>
                            </ul>
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> Dependency parsing for the sentence "The quick brown fox jumps over the lazy dog" identifies relationships between words like subject, object, and modifiers.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("The quick brown fox jumps over the lazy dog")
for token in doc:
    print(f"{token.text} -> {token.dep_} -> {token.head.text}")`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Treebanks:</strong> Annotated syntactic trees that show the structure of sentences, used for training parsers.</li>
                              <li><strong>Phrase Structure Grammar:</strong> A type of grammar that represents the syntactic structure of a sentence in terms of phrases.</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Sentiment Analysis */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">7. Sentiment Analysis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Sentiment analysis detects the sentiment or emotion expressed in a piece of text, categorizing it as positive, negative, or neutral.
                            <br />
                            <strong>Purpose:</strong> Widely used for analyzing reviews, social media posts, and customer feedback to determine public opinion or emotional tone.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> For the sentence "I love this product!", the sentiment is classified as positive.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from textblob import TextBlob

text = "I love this product!"
blob = TextBlob(text)
sentiment = blob.sentiment
print(sentiment)  # Output: Sentiment(polarity=0.5, subjectivity=0.6)`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Polarity:</strong> Indicates how positive or negative a sentiment is (ranges from -1 to 1).</li>
                              <li><strong>Subjectivity:</strong> Measures the degree to which the sentiment is based on personal opinion rather than factual information (ranges from 0 to 1).</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Machine Translation */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">8. Machine Translation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Machine translation (MT) automatically translates text from one language to another.
                            <br />
                            <strong>Purpose:</strong> Machine translation is used to bridge language barriers and provide access to information across languages.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> "Hello" in English is translated to "Hola" in Spanish.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from googletrans import Translator

translator = Translator()
translated = translator.translate("Hello", src='en', dest='es')
print(translated.text)  # Output: 'Hola'`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Neural Machine Translation (NMT):</strong> Uses neural networks to improve translation quality by learning context and relationships between words.</li>
                              <li><strong>Phrase-Based Translation:</strong> Translates text in smaller chunks or phrases rather than word-by-word.</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Text Summarization */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">9. Text Summarization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Text summarization condenses a large body of text into a shorter version, capturing its key points.
                            <br />
                            <strong>Types:</strong> 
                            <ul>
                              <li><strong>Extractive Summarization:</strong> Selects key sentences from the original text to form the summary.</li>
                              <li><strong>Abstractive Summarization:</strong> Generates new sentences that summarize the text, often using natural language generation (NLG).</li>
                            </ul>
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> Summarizing a news article to highlight the main points.
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from gensim.summarization import summarize

text = "Your long text document here..."
summary = summarize(text)
print(summary)  # Output: A concise summary of the text`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Automatic Summarization:</strong> Uses algorithms to perform text summarization without human intervention.</li>
                              <li><strong>Topic Modeling:</strong> Identifies the main topics or themes in a document, which can aid summarization.</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* Word Embeddings */}
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">10. Word Embeddings</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Definition:</strong> Word embeddings represent words as dense vectors in a continuous vector space, capturing semantic relationships between them.
                            <br />
                            <strong>Purpose:</strong> Word embeddings improve the performance of NLP models by enabling them to understand the meaning and relationships between words.
                          </Typography>
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Example:</strong> The word "king" is closer to "queen" in vector space than to "apple".
                          </Typography>
                          <CodeSnippet
                            language="python"
                            code={`from gensim.models import Word2Vec

sentences = [["cat", "sat", "on", "the", "mat"], ["dog", "sat", "on", "the", "log"]]
model = Word2Vec(sentences, min_count=1)
vector = model.wv['cat']
print(vector)  # Word embedding for 'cat'`}
                          />
                          <Typography paragraph style={{ textAlign: 'justify' }}>
                            <strong>Related Concepts:</strong> 
                            <ul>
                              <li><strong>Word2Vec:</strong> A popular algorithm for creating word embeddings.</li>
                              <li><strong>GloVe:</strong> Global Vectors for Word Representation, another widely used word embedding technique.</li>
                              <li><strong>FastText:</strong> Improves upon Word2Vec by considering subword information.</li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionDetails>
                  </Accordion>

                  {/* How NLP Works Section */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">How NLP Works</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="ol" gutterBottom style={{ textAlign: 'justify' }}>
                        <li><strong>Data Collection:</strong> NLP starts by collecting large amounts of text data from various sources such as books, articles, websites, emails, social media platforms, and other digital or printed text. The quality and variety of data significantly impact the performance of NLP models.</li>
                        <li><strong>Preprocessing:</strong> This step involves cleaning and transforming the raw text data into a format suitable for analysis. Preprocessing techniques include:
                          <ul>
                            <li><strong>Tokenization:</strong> Breaking text into words or sentences.</li>
                            <li><strong>Stop Word Removal:</strong> Eliminating common words like 'and', 'the', which don’t add significant meaning.</li>
                            <li><strong>Stemming/Lemmatization:</strong> Reducing words to their root form (e.g., 'running' becomes 'run').</li>
                          </ul>
                        </li>
                        <li><strong>Feature Extraction:</strong> This step involves converting the preprocessed text into numerical values (features) that can be used by machine learning algorithms. Popular methods include word embeddings (like Word2Vec, GloVe) which capture the semantic relationships between words.</li>
                        <li><strong>Model Building:</strong> This is where machine learning or deep learning models are trained using the features extracted from the text. Common models include Naive Bayes, Support Vector Machines, and more complex neural networks like LSTM or Transformers, depending on the complexity of the task.</li>
                        <li><strong>Evaluation:</strong> Once the model is trained, it is evaluated using metrics like accuracy, precision, recall, and F1-score. This helps assess how well the model performs on unseen data and how generalizable it is.</li>
                        <li><strong>Deployment:</strong> After testing, the model is deployed in real-world applications such as chatbots, automated content generation, recommendation engines, or language translation tools.</li>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* When to Use NLP */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">When to Use NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph style={{ textAlign: 'justify' }}>
                        NLP is beneficial whenever there is a need to interpret or process human language. Some of the common scenarios include:
                        <ul>
                          <li><strong>Text Analysis:</strong> To sift through vast amounts of text data and derive meaningful insights from it, such as in legal or medical documents.</li>
                          <li><strong>Sentiment Analysis:</strong> NLP helps in understanding customer opinions and sentiment from reviews, surveys, or social media posts.</li>
                          <li><strong>Automation:</strong> Automating customer service through chatbots or virtual assistants that can interpret human requests and respond accurately.</li>
                          <li><strong>Translation:</strong> NLP is at the core of machine translation tools (like Google Translate) that allow users to convert text from one language to another.</li>
                        </ul>
                        It is especially useful in fields like customer support, market research, content generation, and legal or financial text analysis.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Why NLP is Important */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Why NLP is Important</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph style={{ textAlign: 'justify' }}>
                        NLP is essential because it bridges the gap between human communication and computer understanding. With its help, computers can:
                        <ul>
                          <li><strong>Automate Processes:</strong> NLP-powered systems like chatbots and virtual assistants provide quick and efficient customer service, reducing human intervention.</li>
                          <li><strong>Enhance User Experience:</strong> Applications like voice-controlled assistants (e.g., Siri, Alexa) make interactions more seamless and intuitive for users.</li>
                          <li><strong>Extract Insights:</strong> NLP helps in analyzing large datasets of text, such as user reviews or social media conversations, to find trends, sentiment, and feedback.</li>
                        </ul>
                        NLP is crucial for processing and making sense of the vast amounts of text data that are generated daily, thereby driving data-driven decisions in businesses.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Applications of NLP */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Applications of NLP</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph style={{ textAlign: 'justify' }}>
                        NLP is applied across numerous industries and domains. Some key applications include:
                        <ul>
                          <li><strong>Chatbots and Virtual Assistants:</strong> NLP enables conversational agents to understand and respond to human language, automating tasks such as customer support.</li>
                          <li><strong>Sentiment Analysis:</strong> It is used to gauge public opinion or customer sentiment from reviews, surveys, or social media data, helping businesses adjust their strategies.</li>
                          <li><strong>Machine Translation:</strong> Tools like Google Translate use NLP to translate text from one language to another, supporting global communication.</li>
                          <li><strong>Text Summarization:</strong> NLP helps condense lengthy documents into shorter summaries, useful in news aggregation or legal document review.</li>
                          <li><strong>Information Retrieval:</strong> Search engines and recommendation systems rely on NLP to understand user queries and provide the most relevant results or content.</li>
                          <li><strong>Speech Recognition:</strong> NLP converts spoken language into text, which powers applications like transcription services, voice search, and virtual assistants.</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </CardContent>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NlpExplanation;
