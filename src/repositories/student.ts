import database from '../database'
import { Course } from '../models/course'
import { Student } from '../models/student'

const studentsTable = database.students

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

      const indexToBeDelete = studentsTable.indexOf(student)

      delete studentsTable[indexToBeDelete]
      return studentsTable
    } catch (error) {
      throw error
    }
  }
  async editStudentByEnrollment({ name, enrollment, course }: Student): Promise<Student[]> {
    try {
      const student = await this.getStudentByEnrollment(enrollment)

      const indexToBeEdited = studentsTable.indexOf(student)

      studentsTable[indexToBeEdited] = { name, enrollment, course }
      return studentsTable
    } catch (error) {
      throw error
    }
  }

  async patchStudentCourse(enrollment: string, course: Course): Promise<Student[]> {
    try {
      const student = await this.getStudentByEnrollment(enrollment)

      const indexToBeEdited = studentsTable.indexOf(student)

      studentsTable[indexToBeEdited] = { ...studentsTable[indexToBeEdited], enrollment, course }
      return studentsTable
    } catch (error) {
      throw error
    }
  }
}
