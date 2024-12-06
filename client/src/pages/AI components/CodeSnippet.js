// CodeSnippet.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={coy} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
