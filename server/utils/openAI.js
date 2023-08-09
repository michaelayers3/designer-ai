const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");
const {config} = require('dotenv')

const test = require('dotenv').config({path: './.env'})
// console.log(test)

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_KEY
}));


// console.log(process.env.OPENAI_KEY)
console.log("OpenAI Running")
const getOpenAICompletion = async (messages) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });
  
  
  //  console.log('API response in the console:', response.data.choices)
    // console.log('Narrowed?: ', response)
  
    return response.data.choices;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return null;
  }
};

module.exports = { getOpenAICompletion };
