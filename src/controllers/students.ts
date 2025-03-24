import { Request, Response } from 'express'
import StudentService from '../services/students'

export default class StudentController {
  async addStudent(req: Request, res: Response) {
    const { name, enrollment, course } = req.body

    await new StudentService()
      .addStudent({ name, enrollment, course })
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getStudentByEnrollment(req: Request, res: Response) {
    const { enrollment } = req.query

    await new StudentService()
      .getStudentByEnrollment(enrollment as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getStudents(req: Request, res: Response) {
    await new StudentService()
      .getStudents()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async deleteStudentByEnrollment(req: Request, res: Response) {
    const { enrollment } = req.query

    await new StudentService()
      .deleteStudentByEnrollment(enrollment as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async editStudentByEnrollment(req: Request, res: Response) {
    const { name, enrollment, course } = req.body

    await new StudentService()
      .editStudentByEnrollment({ name, enrollment, course })
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async patchStudentCourse(req: Request, res: Response) {
    const { enrollment, course } = req.body

    await new StudentService()
      .patchStudentCourse(enrollment, course)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }
}
