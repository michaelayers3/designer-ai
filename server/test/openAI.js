

const axios = require('axios');

const API_ENDPOINT = 'https://api.openai.com/v1';
const API_KEY = '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'; // Replace this with your actual OpenAI API key

async function callOpenAI(endpoint, data) {
  try {
    const response = await axios.post(`${API_ENDPOINT}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    console.error('Error Response:', error.response.data); // Log the response data for more details
    throw new Error('poo23');
  }
}

async function getCompletion(prompt) {
  const endpoint = '/chat/completions';
  const data = {
    prompt: prompt,
    max_tokens: 100,
  };
  return callOpenAI(endpoint, data);
}

module.exports = {
  getCompletion, callOpenAI
};
