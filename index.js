import { configDB } from './mongo.config.js'
import dotenv from 'dotenv'
import express from 'express'
import linkRoutes from './routes/linkRoutes.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000

dotenv.config()
configDB()

const app = express()
app.use(express.json())

app.use(
	cors({
		origin: '*',
	})
)

app.use('/api/links', linkRoutes)

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
	)
)
