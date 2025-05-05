import { Injectable } from '@nestjs/common'
import { StudentRequest } from './dto/create-student.dto'
import { StudentResponse } from './dto/student.response.dto'
import StudentRepository from './student.repository'

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  async addStudent({ name, enrollment, coursesIds }: StudentRequest): Promise<string> {
    if (!name) throw 'A name must be set'
    if (!enrollment) throw 'A enrollment must be set'
    if (!coursesIds) throw 'A course must be set'

    return await this.studentRepository.addStudent({ name, enrollment, coursesIds })
  }

  async getStudentById(id: string): Promise<StudentResponse> {
    if (!id) throw 'A id must be set'

    return await this.studentRepository.getStudentById(id)
  }

  async getStudents(): Promise<StudentResponse[]> {
    return await this.studentRepository.getStudents()
  }

  async deleteStudentById(id: string): Promise<StudentResponse[]> {
    if (!id) throw 'A id must be set'

    return await this.studentRepository.deleteStudentById(id)
  }

  async editStudentById(
    { name, enrollment, coursesIds }: StudentRequest,
    id: string
  ): Promise<StudentResponse> {
    if (!name) throw 'A name must be set'
    if (!id) throw 'A id to edit must be set'
    if (!coursesIds) throw 'A course must be set'
    if (!enrollment) throw 'A enrollment must be set'

    return await this.studentRepository.editStudentById({ name, enrollment, coursesIds }, id)
  }

  async patchStudentName(id: string, name: string): Promise<StudentResponse> {
    if (!id) throw 'A id to edit must be set'
    if (!name) throw 'A name must be set'

    return await this.studentRepository.patchStudentName(id, name)
  }
}
