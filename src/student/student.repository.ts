import { Inject, Injectable } from '@nestjs/common'
import { Student } from './entities/student.entity'
import { Course } from '../course/entities/course.entity'
import { StudentRequest } from './dto/create-student.dto'
import { StudentResponse } from './dto/student.response.dto'

@Injectable()
export default class StudentRepository {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository: typeof Student,
    @Inject('COURSE_REPOSITORY')
    private readonly courseRepository: typeof Course
  ) {}
  async addStudent({ name, enrollment, coursesIds }: StudentRequest): Promise<string> {
    const existingCourses = await this.courseRepository.findAll({
      where: {
        id: coursesIds,
      },
    })
    if (existingCourses?.length !== coursesIds?.length) throw 'Some courses do not exist'

    const student = await this.studentRepository.create({ name, enrollment })

    await student.$add('courses', existingCourses)

    return 'Student added successfully!'
  }

  async getStudentById(id: string): Promise<StudentResponse> {
    const student = await this.studentRepository.findByPk(id)
    const courses = await student?.$get('courses')

    if (!student) throw 'Failed to find student'

    return {
      name: student.name,
      enrollment: student.enrollment,
      courses: courses ?? [],
    }
  }

  async getStudents(): Promise<StudentResponse[]> {
    const student = await this.studentRepository.findAll()
    if (!student) throw 'Failed to find student'

    const studentCourses = await Promise.all(
      student.map(async student => {
        const courses = await student.$get('courses')
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
    await this.studentRepository.destroy({ where: { id } })

    return this.getStudents()
  }

  async editStudentById(
    { name, enrollment, coursesIds }: StudentRequest,
    id: string
  ): Promise<StudentResponse> {
    const existingCourses = await this.courseRepository.findAll({
      where: {
        id: coursesIds,
      },
    })

    if (existingCourses?.length !== coursesIds?.length) throw 'Some courses do not exist'

    const student = await this.studentRepository.findByPk(id)
    await this.studentRepository.update({ name, enrollment }, { where: { id } })

    if (!student) throw 'Failed to find student'

    await student.$set('courses', existingCourses)
    return this.getStudentById(id)
  }

  async patchStudentName(id: string, name: string): Promise<StudentResponse> {
    await this.studentRepository.update({ name }, { where: { id } })
    return this.getStudentById(id)
  }
}
