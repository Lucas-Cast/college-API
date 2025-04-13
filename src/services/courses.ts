import { Course } from '../models/course'
import CourseRepository from '../repositories/course'

export default class CourseService {
  async addCourse({ name, code, syllabus }: Course): Promise<string> {
    if (!name) throw new Error('A name must be set')
    if (!code) throw new Error('A code must be set')
    if (!syllabus) throw new Error('A syllabus must be set')

    return await new CourseRepository().addCourse({ name, code, syllabus })
  }

  async getCourseById(id: string): Promise<Course> {
    if (!id) throw new Error('A id must be set')
    //TO DO: friendly error message
    return await new CourseRepository().getCourseById(id)
  }

  async getCourses(): Promise<Course[]> {
    return await new CourseRepository().getCourses()
  }

  async deleteCourseById(id: string): Promise<number> {
    if (!id) throw new Error('A id must be set')

    return await new CourseRepository().deleteCourseById(id)
  }

  async editCourseById({ name, code, syllabus }: Course, id: string): Promise<number> {
    if (!name) throw new Error('A name must be set')
    if (!code) throw new Error('A code must be set')
    if (!id) throw new Error('A id to be edited must be set')
    if (!syllabus) throw new Error('A syllabus must be set')

    return await new CourseRepository().editCourseById({ name, code, syllabus }, id)
  }

  async patchCourseName(id: string, name: string): Promise<number> {
    if (!id) throw new Error('A id must be set')
    if (!name) throw new Error('A name must be set')

    return await new CourseRepository().patchCourseName(id, name)
  }
}
