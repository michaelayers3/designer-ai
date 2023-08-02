import {config} from "dotenv"

config()

import { Configuration, OpenAIApi } from "openai"


const openai = new OpenAIApi(new Configuration({
	apiKey: process.env.OPENAI_KEY
}))
console.log(process.env.OPENAI_KEY)

openai.createChatCompletion({
	model: "gpt-3.5-turbo",
	messages: [{role: "user", content: "I'd like to create a very colorful and fun website. I like the color purple. But i also want it to look professional. Can you make it as an html/css website without any other text added. Just respond with the code please."}]
})
.then(res => {
	console.log(res.data.choices)
})