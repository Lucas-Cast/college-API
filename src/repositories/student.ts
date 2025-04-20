import { Course } from '../models/course'
import { StudentRequest, Student } from '../models/student'
import knex from '../../sequelize'
import { StudentCourse } from '../models/studentCourse'

export default class StudentRepository {
  async addStudent({ name, enrollment, coursesIds }: StudentRequest): Promise<string> {
    const [student_id] = await knex('student')
      .insert({
        name,
        enrollment,
      })
      .returning('id')

    const existingCourses = coursesIds && (await knex('course').whereIn('id', coursesIds))

    if (existingCourses?.length !== coursesIds?.length) throw new Error('Some courses do not exist')

    const studentCourses = existingCourses?.map(course => ({
      student_id: student_id.id,
      course_id: course.id,
    }))
    await knex('student_courses').insert(studentCourses)

    return 'Student added successfully!'
  }

  async getStudentById(id: string): Promise<Student> {
    const studentCourse = await knex('student')
      .select(
        'student.id as student_id',
        'student.name as student_name',
        'student.enrollment as student_enrollment',
        'course.id as course_id',
        'course.name as course_name',
        'course.code as course_code',
        'course.syllabus as course_syllabus'
      )
      .leftJoin('student_courses', 'student.id', 'student_courses.student_id')
      .leftJoin('course', 'student_courses.course_id', 'course.id')
      .where('student.id', id)

    if (studentCourse.length === 0) throw new Error('Failed to find student')
    const student = {
      name: studentCourse[0].student_name,
      enrollment: studentCourse[0].student_enrollment,
    }

    const courses = studentCourse.map(studentCourse => {
      return {
        name: studentCourse.course_name,
        code: studentCourse.course_code,
        syllabus: studentCourse.course_syllabus,
      }
    })

    return {
      name: student.name,
      enrollment: student.enrollment,
      courses,
    }
  }

  async getStudents(): Promise<Student[]> {
    const studentCourse = await knex('student')
      .select(
        'student.id as student_id',
        'student.name as student_name',
        'student.enrollment as student_enrollment',
        'course.id as course_id',
        'course.name as course_name',
        'course.code as course_code',
        'course.syllabus as course_syllabus'
      )
      .leftJoin('student_courses', 'student.id', 'student_courses.student_id')
      .leftJoin('course', 'student_courses.course_id', 'course.id')

    if (studentCourse.length === 0) throw new Error('Failed to find students')

    const studentsMap = new Map()

    for (const row of studentCourse) {
      const {
        student_id,
        student_name,
        student_enrollment,
        course_id,
        course_name,
        course_code,
        course_syllabus,
      } = row

      if (!studentsMap.has(student_id)) {
        studentsMap.set(student_id, {
          name: student_name,
          enrollment: student_enrollment,
          courses: [],
        })
      }

      if (course_id) {
        studentsMap.get(student_id).courses.push({
          name: course_name,
          code: course_code,
          syllabus: course_syllabus,
        })
      }
    }

    const students = Array.from(studentsMap.values())
    return students
  }

  async deleteStudentById(id: string): Promise<Student[]> {
    await knex('student').delete().where({ id })

    return this.getStudents()
  }

  async editStudentById(
    { name, enrollment, coursesIds }: StudentRequest,
    id: string
  ): Promise<Student> {
    const student = await knex('student')
      .update({
        name,
        enrollment,
      })
      .where({ id })

    if (coursesIds && coursesIds.length > 0) {
      const existingCourses = await knex('student_courses')
        .select('course_id')
        .where('student_id', id)

      const existingCourseIds = existingCourses.map(row => row.course_id)

      const coursesIdsToDelete = existingCourseIds.filter(
        existingId => !coursesIds.includes(existingId)
      )

      if (coursesIdsToDelete.length > 0) {
        await knex('student_courses')
          .where('student_id', id)
          .whereIn('course_id', coursesIdsToDelete)
          .delete()
      }
      const studentCourses = coursesIds.map(course_id => ({
        student_id: id,
        course_id,
      }))

      await knex('student_courses')
        .insert(studentCourses)
        .onConflict(['student_id', 'course_id'])
        .ignore()
    }

    return this.getStudentById(id)
  }

  async patchStudentName(id: string, name: string): Promise<Student> {
    const [student_id ] = await knex('student')
      .update({
        name,
      })
      .where({ id })
      .returning('id')

    return this.getStudentById(student_id.id)
  }
}
