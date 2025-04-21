import { StudentRequest, StudentResponse } from '../models/student'
import StudentRepository from '../repositories/student'

export default class StudentService {
  async addStudent({ name, enrollment, coursesIds }: StudentRequest): Promise<string> {
    if (!name) throw 'A name must be set'
    if (!enrollment) throw 'A enrollment must be set'
    if (!coursesIds) throw 'A course must be set'

    return await new StudentRepository().addStudent({ name, enrollment, coursesIds })
  }

  async getStudentById(id: string): Promise<StudentResponse> {
    if (!id) throw 'A id must be set'

    return await new StudentRepository().getStudentById(id)
  }

  async getStudents(): Promise<StudentResponse[]> {
    return await new StudentRepository().getStudents()
  }

  async deleteStudentById(id: string): Promise<StudentResponse[]> {
    if (!id) throw 'A id must be set'

    return await new StudentRepository().deleteStudentById(id)
  }

  async editStudentById(
    { name, enrollment, coursesIds }: StudentRequest,
    id: string
  ): Promise<StudentResponse> {
    if (!name) throw 'A name must be set'
    if (!id) throw 'A id to edit must be set'
    if (!coursesIds) throw 'A course must be set'
    if (!enrollment) throw 'A enrollment must be set'

    return await new StudentRepository().editStudentById({ name, enrollment, coursesIds }, id)
  }

  async patchStudentName(id: string, name: string): Promise<StudentResponse> {
    if (!id) throw 'A id to edit must be set'
    if (!name) throw 'A name must be set'

    return await new StudentRepository().patchStudentName(id, name)
  }
}
