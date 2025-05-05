import { Injectable } from '@nestjs/common'
import { CourseAttributes } from './dto/course.dto'
import CourseRepository from './course.repository'

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}
  async addCourse({ name, code, syllabus }: CourseAttributes): Promise<CourseAttributes> {
    if (!name) throw new Error('A name must be set')
    if (!code) throw new Error('A code must be set')
    if (!syllabus) throw new Error('A syllabus must be set')

    return await this.courseRepository.addCourse({ name, code, syllabus })
  }

  async getCourseById(id: string): Promise<CourseAttributes> {
    if (!id) throw new Error('A id must be set')
    //TO DO: friendly error message
    return await this.courseRepository.getCourseById(id)
  }

  async getCourses(): Promise<CourseAttributes[]> {
    return await this.courseRepository.getCourses()
  }

  async deleteCourseById(id: string): Promise<number> {
    if (!id) throw new Error('A id must be set')

    return await this.courseRepository.deleteCourseById(id)
  }

  async editCourseById({ name, code, syllabus }: CourseAttributes, id: string): Promise<number> {
    if (!name) throw new Error('A name must be set')
    if (!code) throw new Error('A code must be set')
    if (!id) throw new Error('A id to be edited must be set')
    if (!syllabus) throw new Error('A syllabus must be set')

    return await this.courseRepository.editCourseById({ name, code, syllabus }, id)
  }

  async patchCourseName(id: string, name: string): Promise<number> {
    if (!id) throw new Error('A id must be set')
    if (!name) throw new Error('A name must be set')

    return await this.courseRepository.patchCourseName(id, name)
  }
}
