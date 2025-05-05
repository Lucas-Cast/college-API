import { Sequelize } from 'sequelize-typescript'
import { settings } from '../../settings'
import { StudentCourses } from '../student-courses/entities/student-course.entity'
import { Course } from '../course/entities/course.entity'
import { Student } from '../student/entities/student.entity'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: settings.host,
        port: settings.dbPort,
        username: settings.user,
        password: settings.password,
        database: settings.database,
      })
      sequelize.addModels([Course, Student, StudentCourses])
      await sequelize.sync()
      return sequelize
    },
  },
]
