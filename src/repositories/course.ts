import { Course } from '../models/course'
import knex from '../../knexfile'

export default class CourseRepository {
  async addCourse({ name, code, syllabus }: Course): Promise<string> {
    return knex('course').insert({ name, code, syllabus })
  }

  async getCourseById(id: string): Promise<Course> {
    return knex('course').select('*').from('course').where({ id }).first()
  }

  async getCourses(): Promise<Course[]> {
    return knex('course').select('*').from('course')
  }

  async deleteCourseById(id: string): Promise<number> {
    return knex('course').delete().where({ id })
  }

  async editCourseById({ name, code, syllabus }: Course, id: string): Promise<number> {
    return knex('course').update({ name, code, syllabus }).from('course').where({ id })
  }

  async patchCourseName(id: string, name: string): Promise<number> {
    return knex('course').update({ name }).from('course').where({ id })
  }
}
