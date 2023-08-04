import {config} from "dotenv"

config()

import { Configuration, OpenAIApi } from "openai"


const openai = new OpenAIApi(new Configuration({
	apiKey: process.env.OPENAI_KEY
}))
console.log(process.env.OPENAI_KEY)

openai.createChatCompletion({
	model: "gpt-3.5-turbo",
	messages: [{role: "user", content: "This is a test"

}]
})
.then(res => {
	console.log(res.data.choices)
})