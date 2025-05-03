import Student from '../models/student'
import { StudentRequest, StudentResponse } from '../models/student'
import Course from '../models/course'

export default class StudentRepository {
  async addStudent({ name, enrollment, coursesIds }: StudentRequest): Promise<string> {
    const existingCourses = await Course.findAll({
      where: {
        id: coursesIds,
      },
    })
    if (existingCourses?.length !== coursesIds?.length) throw 'Some courses do not exist'

    const student = await Student.create({ name, enrollment })

    await student.addCourse(existingCourses)

    return 'Student added successfully!'
  }

  async getStudentById(id: string): Promise<StudentResponse> {
    const student = await Student.findByPk(id)
    const courses = await student?.getCourses()

    if (!student) throw 'Failed to find student'

    return {
      name: student.name,
      enrollment: student.enrollment,
      courses: courses ?? [],
    }
  }

  async getStudents(): Promise<StudentResponse[]> {
    const student = await Student.findAll()
    if (!student) throw 'Failed to find student'

    const studentCourses = await Promise.all(
      student.map(async student => {
        const courses = await student.getCourses()
        return {
          name: student.name,
          enrollment: student.enrollment,
          courses: courses ?? [],
        } as StudentResponse
      })
    )

    return studentCourses
  }

  async deleteStudentById(id: string): Promise<StudentResponse[]> {
    await Student.destroy({ where: { id } })

    return this.getStudents()
  }

  async editStudentById(
    { name, enrollment, coursesIds }: StudentRequest,
    id: string
  ): Promise<StudentResponse> {

    const existingCourses = await Course.findAll({
      where: {
        id: coursesIds,
      },
    })

    if (existingCourses?.length !== coursesIds?.length) throw 'Some courses do not exist'

    const student = await Student.findByPk(id)
    await Student.update({ name, enrollment }, { where: { id } })

    if (!student) throw 'Failed to find student'

    await student.setCourses(existingCourses)
    return this.getStudentById(id)
  }

  async patchStudentName(id: string, name: string): Promise<StudentResponse> {
    await Student.update({ name }, { where: { id } })
    return this.getStudentById(id)
  }
}
