import { Router } from 'express'
import StudentController from '../controllers/students'
//import { UserController } from "./controllers/UserController";

const studentRoutes = Router()
/**
 * @openapi
 * '/student/add-student':
 *  post:
 *     tags:
 *     - Student
 *     summary: Register a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - enrollment
 *               - course
 *             properties:
 *               name:
 *                 type: string
 *               enrollment:
 *                 type: string
 *               course:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
studentRoutes.post('/student/add-student', new StudentController().addStudent)

studentRoutes.get(
  '/student/get-student-by-enrollment',
  new StudentController().getStudentByEnrollment
)

studentRoutes.get('/student/get-students', new StudentController().getStudents)

studentRoutes.delete(
  '/student/delete-student-by-enrollment',
  new StudentController().deleteStudentByEnrollment
)

studentRoutes.put(
  '/student/edit-student-by-enrollment',
  new StudentController().editStudentByEnrollment
)

studentRoutes.patch('/student/patch-student-course', new StudentController().patchStudentCourse)

export default studentRoutes
