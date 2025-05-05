import { Provider } from '@nestjs/common'
import { StudentCourses } from './student-course.entity'

export const studentCoursesProviders: Provider[] = [
  {
    provide: 'STUDENT_COURSES_REPOSITORY',
    useFactory: sequelize => sequelize.getRepository(StudentCourses),
    inject: ['SEQUELIZE'],
  },
]
