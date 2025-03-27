import { Course } from './models/course'
import { Student } from './models/student'

const database = {
  students: [
    {
      name: 'Lucas',
      course: { code: '12345', name: 'sistemas de informação', syllabus: 'SI' },
      enrollment: '1234SINF',
    },
  ] as Student[],
  courses: [{ code: '12345', name: 'sistemas de informação', syllabus: 'SI' }] as Course[],
}

export default database
