import express from 'express'
import studentRoutes from './routers/students'
import cors from 'cors'
import swaggerDocs from './utils/swagger'

const port = process.env.SERVER_PORT

const app = express()
app.use(express.json())
app.use(cors())
app.use(studentRoutes)
swaggerDocs(app)

app.listen(8000)
