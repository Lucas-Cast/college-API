import database from '../database'
import { Course } from '../models/course'
import { Course as CourseModel } from '../models/course'

let coursesTable = database.courses

export default class CourseRepository {
  addCourse({ name, code, syllabus }: CourseModel): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        coursesTable.push({ name, code, syllabus })
        resolve('Course added successfully!')
      } catch (error) {
        reject(error)
      }
    })
  }

  getCourseByCode(code: string): Promise<CourseModel> {
    return new Promise((resolve, reject) => {
      const course = coursesTable.find(course => course.code === code)

      if (!course) {
        reject(new Error('Failed to find course'))
        return
      }

      resolve(course)
    })
  }

  getCourses(): Promise<CourseModel[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(coursesTable)
      } catch (error) {
        reject(error)
      }
    })
  }

  async deleteCourseByCode(code: string): Promise<CourseModel[]> {
    try {
      const course = await this.getCourseByCode(code)

      coursesTable = coursesTable.filter(c => c !== course)
      
      return coursesTable
    } catch (error) {
      throw error
    }
  }
  
  async editCourseByCode({ name, code, syllabus }: CourseModel, codeToEdit: string): Promise<CourseModel[]> {
    try {
      const course = await this.getCourseByCode(codeToEdit)

      const indexToBeEdited = coursesTable.indexOf(course)

      coursesTable[indexToBeEdited] = { name, code, syllabus }
      return coursesTable
    } catch (error) {
      throw error
    }
  }

  async patchCourseName(codeToEdit: string, name: string): Promise<CourseModel[]> {
    try {
      const course = await this.getCourseByCode(codeToEdit)

      const indexToBeEdited = coursesTable.indexOf(course)

      coursesTable[indexToBeEdited] = { ...coursesTable[indexToBeEdited], name }
      return coursesTable
    } catch (error) {
      throw error
    }
  }
}