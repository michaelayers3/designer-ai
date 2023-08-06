import {config} from "dotenv"

config()

import { Configuration, OpenAIApi } from "openai"


const openai = new OpenAIApi(new Configuration({
	apiKey: process.env.OPENAI_KEY
}))

openai.createChatCompletion({
	model: "gpt-3.5-turbo",
	messages: [{role: "user", content: "Can you create a basic html website for me. Please respond with just the code, no other comments or text from you please."}]
})
.then(res => {
	console.log(res.data.choices[0].message.content)
})