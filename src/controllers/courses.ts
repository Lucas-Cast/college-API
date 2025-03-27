import { Request, Response } from 'express'
import CourseService from '../services/courses'

export default class CourseController {
  async addCourse(req: Request, res: Response) {
    const { name, syllabus, code } = req.body

    await new CourseService()
      .addCourse({ name, syllabus, code })
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getCourseByCode(req: Request, res: Response) {
    const { code } = req.query

    await new CourseService()
      .getCourseByCode(code as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getCourses(req: Request, res: Response) {
    await new CourseService()
      .getCourses()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async deleteCourseByCode(req: Request, res: Response) {
    const { code } = req.query

    await new CourseService()
      .deleteCourseByCode(code as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async editCourseByCode(req: Request, res: Response) {
    const { name, syllabus, code } = req.body
    const { codeToEdit } = req.query

    await new CourseService()
      .editCourseByCode({ name, syllabus, code }, codeToEdit as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async patchCourseName(req: Request, res: Response) {
    const { name } = req.body
    const { codeToEdit } = req.query
    await new CourseService()
      .patchCourseName(codeToEdit as string, name)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }
}
