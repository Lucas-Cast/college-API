import { Course } from '../models/course'
import { Student } from '../models/student'
import StudentRepository from '../repositories/student'

export default class StudentService {
  async addStudent({ name, enrollment, course }: Student): Promise<string> {
    !name && new Error('A name must be set')
    !enrollment && new Error('A enrollment must be set')
    !course && new Error('A course must be set')

    return await new StudentRepository().addStudent({ name, enrollment, course })
  }

  async getStudentByEnrollment(enrollment: string): Promise<Student> {
    !enrollment && new Error('A enrollment must be set')

    return await new StudentRepository().getStudentByEnrollment(enrollment)
  }

  async getStudents(): Promise<Student[]> {
    return await new StudentRepository().getStudents()
  }

  async deleteStudentByEnrollment(enrollment: string): Promise<Student[]> {
    !enrollment && new Error('A enrollment must be set')

    return await new StudentRepository().deleteStudentByEnrollment(enrollment)
  }

  async editStudentByEnrollment({ name, enrollment, course }: Student, enrollmentToEdit: string): Promise<Student[]> {
    !name && new Error('A name must be set')
    !enrollmentToEdit && new Error('A enrollment to edit must be set')
    !course && new Error('A course must be set')
    !enrollment && new Error('A enrollment must be set')

    return await new StudentRepository().editStudentByEnrollment({ name, enrollment, course }, enrollmentToEdit)
  }

  async patchStudentCourse(enrollmentToEdit: string, course: Course): Promise<Student[]> {
    !enrollmentToEdit && new Error('A enrollment must be set')
    !course && new Error('A course must be set')

    return await new StudentRepository().patchStudentCourse(enrollmentToEdit, course)
  }
}
