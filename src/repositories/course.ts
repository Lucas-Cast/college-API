import Course, { CourseAttributes } from '../models/course'

export default class CourseRepository {
  async addCourse({ name, code, syllabus }: CourseAttributes): Promise<Course> {
    return Course.create({ name, code, syllabus })
  }

  async getCourseById(id: string): Promise<Course> {
    const course = await Course.findByPk(id)  

    if (!course) throw 'Failed to find course'
    return course
  }

  async getCourses(): Promise<Course[]> {
    return Course.findAll()
  }

  async deleteCourseById(id: string): Promise<number> {
    return Course.destroy({ where: { id } })
  }

  async editCourseById({ name, code, syllabus }: CourseAttributes, id: string): Promise<number> {
    const [ affectedCount ] = await Course.update({ name, code, syllabus }, { where: { id } })
    return affectedCount
  }

  async patchCourseName(id: string, name: string): Promise<number> {
    const [ affectedCount ] = await Course.update({ name }, { where: { id } })
    return affectedCount
  }
}
