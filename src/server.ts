import express from 'express'
import studentRoutes from './routers/students'
import cors from 'cors'
import swaggerDocs from './utils/swagger'
import coursesRoutes from './routers/courses'
import { settings } from '../settings'

const app = express()
app.use(express.json())
app.use(cors())
//app.use(studentRoutes)
app.use(coursesRoutes)
swaggerDocs(app)

app.listen(settings.serverPort)
