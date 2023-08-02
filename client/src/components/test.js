// frontend/components/YourComponent.js

import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GENERATE_TEXT = gql`
  query GenerateText($prompt: String!) {
    generateText(prompt: $prompt)
  }
`;

const YourComponent = () => {
  const [responseText, setResponseText] = useState('');
  const [prompt, setPrompt] = useState('');

  const { loading, error, data } = useQuery(GENERATE_TEXT, {
    variables: { prompt },
    onCompleted: (data) => setResponseText(data.generateText),
  });

  const handleGenerateText = () => {
    // The query will be automatically executed when prompt changes due to the variables option
    // The result will be available in the 'data' object
  };

  return (
    <div>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={handleGenerateText}>Generate Text</button>
      <div>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>Error: {error.message}</p> : null}
        <p>Response: {responseText}</p>
      </div>
    </div>
  );
};

export default YourComponent;
