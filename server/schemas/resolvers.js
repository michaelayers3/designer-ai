// backend/resolvers.js

const { getCompletion } = require('../test/openAI');

const resolvers = {
  Query: {
    generateText: async (prompt) => {
      try {
        const response = await getCompletion(prompt);
        return response.choices[0].text;
      } catch (error) {
        console.log(prompt)
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;

