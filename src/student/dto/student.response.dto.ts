import { CourseAttributes } from '../../course/dto/course.dto'

export interface StudentResponse {
  name: string
  enrollment: string
  courses: CourseAttributes[]
}
