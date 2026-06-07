import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 3333

app.set('port', port)

app.use(cors())
app.use(express.json())

export default app
