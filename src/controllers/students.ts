import { Request, Response } from 'express'
import StudentService from '../services/students'

export default class StudentController {
  async addStudent(req: Request, res: Response) {
    const { name, enrollment, coursesIds } = req.body

    await new StudentService()
      .addStudent({ name, enrollment, coursesIds })
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getStudentById(req: Request, res: Response) {
    const { id } = req.query
    await new StudentService()
      .getStudentById(id as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async getStudents(req: Request, res: Response) {
    await new StudentService()
      .getStudents()
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async deleteStudentById(req: Request, res: Response) {
    const { id } = req.query

    await new StudentService()
      .deleteStudentById(id as string)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  }

  async editStudentById(req: Request, res: Response) {
    const { name, enrollment, coursesIds } = req.body
    const { id } = req.query

    await new StudentService()
      .editStudentById({ name, enrollment, coursesIds }, id as string)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }

  async patchStudentName(req: Request, res: Response) {
    const { name } = req.body
    const { id } = req.query
    await new StudentService()
      .patchStudentName(id as string, name)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err))
  }
}
