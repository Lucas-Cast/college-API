import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common'
import { StudentService } from './student.service'
import { StudentRequest } from './dto/create-student.dto'
import { Response } from 'express'

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async addStudent(@Body() createStudentDto: StudentRequest, res: Response) {
    await this.studentService
      .addStudent(createStudentDto)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Get()
  async getStudents(res: Response) {
    await this.studentService
      .getStudents()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string, res: Response) {
    await this.studentService
      .getStudentById(id)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Put(':id')
  async editStudentById(
    @Param('id') id: string,
    @Body() createStudentDto: StudentRequest,
    res: Response
  ) {
    await this.studentService
      .editStudentById(createStudentDto, id)
      .then(() => res.status(200).send('Course successfully edited'))
      .catch(err => res.status(400).send(err))
  }

  @Patch(':id')
  async patchStudentName(@Param('id') id: string, @Body() name: string, res: Response) {
    await this.studentService
      .patchStudentName(id, name)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Delete(':id')
  async deleteStudentById(@Param('id') id: string, res: Response) {
    await this.studentService
      .deleteStudentById(id)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  }
}
