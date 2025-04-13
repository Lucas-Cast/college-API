import { Course } from '../models/course'
import { Student } from '../models/student'


export default class StudentRepository {
  addStudent({ name, enrollment, course }: Student): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        studentsTable.push({ name, enrollment, course })
        resolve('Student added successfully!')
      } catch (error) {
        reject(error)
      }
    })
  }

  getStudentByEnrollment(enrollment: string): Promise<Student> {
    return new Promise((resolve, reject) => {
      const student = studentsTable.find(student => student.enrollment === enrollment)

      if (!student) {
        reject(new Error('Failed to find student'))
        return
      }

      resolve(student)
    })
  }

  getStudents(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(studentsTable)
      } catch (error) {
        reject(error)
      }
    })
  }

  async deleteStudentByEnrollment(enrollment: string): Promise<Student[]> {
    try {
      const student = await this.getStudentByEnrollment(enrollment)

      studentsTable = studentsTable.filter(s => s !== student)

      return studentsTable
    } catch (error) {
      throw error
    }
  }
  async editStudentByEnrollment({ name, enrollment, course }: Student, enrollmentToEdit: string): Promise<Student[]> {
    try {
      const student = await this.getStudentByEnrollment(enrollmentToEdit)

      const indexToBeEdited = studentsTable.indexOf(student)

      studentsTable[indexToBeEdited] = { name, enrollment, course }
      return studentsTable
    } catch (error) {
      throw error
    }
  }

  async patchStudentCourse(enrollmentToEdit: string, course: Course): Promise<Student[]> {
    try {
      const student = await this.getStudentByEnrollment(enrollmentToEdit)

      const indexToBeEdited = studentsTable.indexOf(student)

      studentsTable[indexToBeEdited] = { ...studentsTable[indexToBeEdited], course }
      return studentsTable
    } catch (error) {
      throw error
    }
  }
}
