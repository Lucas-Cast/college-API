import express from 'express'
import studentRoutes from './routers/students'
import cors from 'cors'
import swaggerDocs from './utils/swagger'
import coursesRoutes from './routers/courses'

const port = process.env.SERVER_PORT //TODO: use dotenv port

const app = express()
app.use(express.json())
app.use(cors())
app.use(studentRoutes)
app.use(coursesRoutes)
swaggerDocs(app) //TODO: configure swagger for all endpoints

app.listen(8000)
