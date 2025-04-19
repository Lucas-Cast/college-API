import { Router } from 'express'
import StudentController from '../controllers/students'

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
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Fulano"
 *               enrollment:
 *                 type: string
 *                 example: "9876SINF"
 *               coursesIds:
 *                 type: array
 *                 items:
 *                   type: number
 *                 example: [1, 2]
 *     responses:
 *       200:
 *         description: Student added successfully!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Student added successfully!"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid student data"
 */
studentRoutes.post('/student/add-student', new StudentController().addStudent)

/**
 * @openapi
 * '/student/get-student-by-id':
 *  get:
 *     tags:
 *     - Student
 *     summary: Get a student by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Student's ID
 *         example: "1"
 *     responses:
 *       200:
 *         description: Student found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 enrollment:
 *                   type: string
 *                 coursesIds:
 *                   type: array
 *                   items:
 *                     type: number
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "ID is required"
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Student not found"
 */
studentRoutes.get(
  '/student/get-student-by-id',
  new StudentController().getStudentById
)

/**
 * @openapi
 * '/student/get-students':
 *  get:
 *     tags:
 *     - Student
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   enrollment:
 *                     type: string
 *                   coursesIds:
 *                     type: array
 *                     items:
 *                       type: number
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
studentRoutes.get('/student/get-students', new StudentController().getStudents)

/**
 * @openapi
 * '/student/delete-student-by-id':
 *  delete:
 *     tags:
 *     - Student
 *     summary: Delete a student by ID and return remaining students
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student's ID to be deleted
 *         example: "1234"
 *     responses:
 *       200:
 *         description: Student deleted successfully and list of remaining students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   enrollment:
 *                     type: string
 *                   coursesIds:
 *                     type: array
 *                     items:
 *                       type: number
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
studentRoutes.delete(
  '/student/delete-student-by-id',
  new StudentController().deleteStudentById
)

/**
 * @openapi
 * '/student/edit-student-by-id':
 *  put:
 *     tags:
 *     - Student
 *     summary: Edit a student by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student to be edited
 *         example: "1234"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               enrollment:
 *                 type: string
 *               coursesIds:
 *                 type: array
 *                 items:
 *                   type: number
 *     responses:
 *       200:
 *         description: Student successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 enrollment:
 *                   type: string
 *                 coursesIds:
 *                   type: array
 *                   items:
 *                     type: number
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
studentRoutes.put(
  '/student/edit-student-by-id',
  new StudentController().editStudentById
)

/**
 * @openapi
 * '/student/patch-student-name':
 *  patch:
 *     tags:
 *     - Student
 *     summary: Update only the name of a student
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student to update
 *         example: "1234"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student name successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 enrollment:
 *                   type: string
 *                 coursesIds:
 *                   type: array
 *                   items:
 *                     type: number
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
studentRoutes.patch('/student/patch-student-name', new StudentController().patchStudentName)

export default studentRoutes
