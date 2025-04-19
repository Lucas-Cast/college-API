import { Course } from './course'

export interface Student {
  name: string
  enrollment: string
  courses: Course[]
}

export interface StudentRequest {
  name: string
  enrollment: string
  coursesIds?: number[]
}
