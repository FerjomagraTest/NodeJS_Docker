const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const router = require('./src/routes')

const {json, urlencoded} = express

const app = express()

const port = process.env.PORT || 8080

app.use(json())
app.use(urlencoded({extended: false}))

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(morgan('dev'))

app.use(router)

app.use("/home", (req,res)=>{
	res.sendFile(path.join(__dirname+'/src/html/index.html'))
})

app.use('/', (req,res)=>{
	res.send('Microservice v1.0.0, running succesfully')
})

app.listen(port, ()=>{
	console.log(`Server on port ${port}`)
})