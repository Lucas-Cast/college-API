import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common'
import { Response } from 'express'
import { CourseService } from './course.service'
import { CourseAttributes } from './dto/course.dto'

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async addCourse(@Body() createCourseDto: CourseAttributes, res: Response) {
    const { name, syllabus, code } = createCourseDto

    await this.courseService
      .addCourse({ name, syllabus, code })
      .then(() => res.status(200).send('Course successfully added'))
      .catch(err => res.status(400).send(err))
  }

  @Get()
  async getCourses(res: Response) {
    await this.courseService
      .getCourses()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Get(':id')
  async getCoursesById(@Param('id') id: string, res: Response) {
    await this.courseService
      .getCourseById(id)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  @Patch(':id')
  async patchCourseName(@Param('id') id: string, @Body() name: string, res: Response) {
    await this.courseService
      .patchCourseName(id, name)
      .then(() => res.status(200).send('Course name successfully patched'))
      .catch(err => res.status(400).send(err))
  }

  @Put(':id')
  async editCourseById(
    @Param('id') id: string,
    @Body() updateCourseDto: CourseAttributes,
    res: Response
  ) {
    await this.courseService
      .editCourseById(updateCourseDto, id)
      .then(() => res.status(200).send('Course successfully edited'))
      .catch(err => res.status(400).send(err))
  }

  @Delete(':id')
  async deleteCourseById(@Param('id') id: string, res: Response) {
    await this.courseService
      .deleteCourseById(id)
      .then(() => res.status(200).send('Course successfully deleted'))
      .catch(err => res.status(400).send(err))
  }
}
