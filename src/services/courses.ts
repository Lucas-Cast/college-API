import { Course } from '../models/course'
import { Course as CourseModel } from '../models/course'
import CourseRepository from '../repositories/course'

export default class CourseService {
  async addCourse({ name, code, syllabus }: CourseModel): Promise<string> {
    !name && new Error('A name must be set')
    !code && new Error('A code must be set')
    !syllabus && new Error('A syllabus must be set')

    return await new CourseRepository().addCourse({ name, code, syllabus })
  }

  async getCourseByCode(code: string): Promise<CourseModel> {
    !code && new Error('A code must be set')

    return await new CourseRepository().getCourseByCode(code)
  }

  async getCourses(): Promise<CourseModel[]> {
    return await new CourseRepository().getCourses()
  }

  async deleteCourseByCode(code: string): Promise<CourseModel[]> {
    !code && new Error('A code must be set')

    return await new CourseRepository().deleteCourseByCode(code)
  }

  async editCourseByCode({ name, code, syllabus }: CourseModel, codeToEdit: string): Promise<CourseModel[]> {
    !name && new Error('A name must be set')
    !code && new Error('A code must be set')
    !codeToEdit && new Error('A code to be edited must be set')
    !syllabus && new Error('A syllabus must be set')

    return await new CourseRepository().editCourseByCode({ name, code, syllabus }, codeToEdit)
  }

  async patchCourseName(codeToEdit: string, name: string): Promise<CourseModel[]> {
    !codeToEdit && new Error('A code must be set')
    !name && new Error('A name must be set')

    return await new CourseRepository().patchCourseName(codeToEdit, name)
  }
}
