import sequelize from '../../sequelize'
import { settings } from '../../settings'
import { Express } from 'express'
import '../models/student'
import '../models/course'

export async function startServer(app: Express) {
  try {
    await sequelize.authenticate()
    console.log('✅ Database connection established successfully.')

    await sequelize.sync()

    app.listen(settings.serverPort, () => {
      console.log(`🚀 Server running on port ${settings.serverPort}`)
    })
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error)
    process.exit(1)
  }
}
