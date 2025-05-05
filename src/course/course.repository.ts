import { Inject, Injectable } from '@nestjs/common'
import { CourseAttributes } from './dto/course.dto'
import { Course } from './entities/course.entity'

@Injectable()
export default class CourseRepository {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private courseRepository: typeof Course
  ) {}
  async addCourse({ name, code, syllabus }: CourseAttributes): Promise<Course> {
    return await this.courseRepository.create({ name, code, syllabus })
  }

  async getCourseById(id: string): Promise<Course> {
    const course = await this.courseRepository.findByPk(id)

    if (!course) throw 'Failed to find course'
    return course
  }

  async getCourses(): Promise<Course[]> {
    return await this.courseRepository.findAll()
  }

  async deleteCourseById(id: string): Promise<number> {
    return await this.courseRepository.destroy({ where: { id } })
  }

  async editCourseById({ name, code, syllabus }: CourseAttributes, id: string): Promise<number> {
    const [affectedCount] = await this.courseRepository.update(
      { name, code, syllabus },
      { where: { id } }
    )
    return affectedCount
  }

  async patchCourseName(id: string, name: string): Promise<number> {
    const [affectedCount] = await this.courseRepository.update({ name }, { where: { id } })
    return affectedCount
  }
}
