
// const axios = require('axios');

// const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

// exports.generateText = async (req, res) => {
//   const { prompt } = req.body;

//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/engines/davinci/completions',
//       {
//         prompt: prompt,
//         max_tokens: 100,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${OPENAI_API_KEY}`,
//         },
//       }
//     );

//     res.json({ data: response.data.choices[0].text });
//   } catch (error) {
//     res.status(500).json({ error: 'Poo1' });
//   }
// };
