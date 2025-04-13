import { Request, Response } from 'express'
import CourseService from '../services/courses'

export default class CourseController {
  async addCourse(req: Request, res: Response) {
    const { name, syllabus, code } = req.body

    await new CourseService()
      .addCourse({ name, syllabus, code })
      .then(() => res.status(200).send('Course successfully added'))
      .catch(err => res.status(400).send(err))
  }

  async getCourseById(req: Request, res: Response) {
    const { id } = req.query

    await new CourseService()
      .getCourseById(id as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getCourses(req: Request, res: Response) {
    await new CourseService()
      .getCourses()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async deleteCourseById(req: Request, res: Response) {
    const { id } = req.query

    await new CourseService()
      .deleteCourseById(id as string)
      .then(() => res.status(200).send('Course successfully deleted'))
      .catch(err => res.status(400).send(err))
  }

  async editCourseById(req: Request, res: Response) {
    const { name, syllabus, code } = req.body
    const { id } = req.query

    await new CourseService()
      .editCourseById({ name, syllabus, code }, id as string)
      .then(() => res.status(200).send('Course successfully edited'))
      .catch(err => res.status(400).send(err))
  }

  async patchCourseName(req: Request, res: Response) {
    const { name } = req.body
    const { id } = req.query
    await new CourseService()
      .patchCourseName(id as string, name)
      .then(() => res.status(200).send('Course name successfully patched'))
      .catch(err => res.status(400).send(err))
  }
}
