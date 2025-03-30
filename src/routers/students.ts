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
 *               - course
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Fulano"
 *               enrollment:
 *                 type: string
 *                 example: "9876SINF"
 *               course:
 *                 type: object
 *                 required:
 *                   - code
 *                   - name
 *                   - syllabus
 *                 properties:
 *                   code:
 *                     type: string
 *                     example: "12345"
 *                   name:
 *                     type: string
 *                     example: "sistemas de informação"
 *                   syllabus:
 *                     type: string
 *                     example: "SI"
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
 * '/student/get-student-by-enrollment':
 *  get:
 *     tags:
 *     - Student
 *     summary: Get a student by enrollment number
 *     parameters:
 *       - in: query
 *         name: enrollment
 *         required: true
 *         schema:
 *           type: string
 *         description: Student's enrollment number
 *         example: "1234SINF"
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
 *                   example: "string"
 *                 enrollment:
 *                   type: string
 *                   example: "string"
 *                 course:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "string"
 *                     code:
 *                       type: string
 *                       example: "string"
 *                     syllabus:
 *                       type: string
 *                       example: "string"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Enrollment number is required"
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
  '/student/get-student-by-enrollment',
  new StudentController().getStudentByEnrollment
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
 *                   course:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       code:
 *                         type: string
 *                       syllabus:
 *                         type: string
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
 * '/student/delete-student-by-enrollment':
 *  delete:
 *     tags:
 *     - Student
 *     summary: Delete a student by enrollment number and return remaining students
 *     parameters:
 *       - in: query
 *         name: enrollmentToEdit
 *         required: true
 *         schema:
 *           type: string
 *         description: Student's enrollment number to be deleted
 *         example: "1234SINF"
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
 *                   course:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       code:
 *                         type: string
 *                       syllabus:
 *                         type: string
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
  '/student/delete-student-by-enrollment',
  new StudentController().deleteStudentByEnrollment
)

/**
 * @openapi
 * '/student/edit-student-by-enrollment':
 *  put:
 *     tags:
 *     - Student
 *     summary: Edit a student by enrollment number
 *     parameters:
 *       - in: query
 *         name: enrollmentToEdit
 *         required: true
 *         schema:
 *           type: string
 *         description: Enrollment number of the student to be edited
 *         example: "1234SINF"
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
 *               course:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   code:
 *                     type: string
 *                   syllabus:
 *                     type: string
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
 *                 course:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     code:
 *                       type: string
 *                     syllabus:
 *                       type: string
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
  '/student/edit-student-by-enrollment',
  new StudentController().editStudentByEnrollment
)

/**
 * @openapi
 * '/student/patch-student-course':
 *  patch:
 *     tags:
 *     - Student
 *     summary: Update only the course information of a student
 *     parameters:
 *       - in: query
 *         name: enrollmentToEdit
 *         required: true
 *         schema:
 *           type: string
 *         description: Enrollment number of the student to update
 *         example: "1234SINF"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course
 *             properties:
 *               course:
 *                 type: object
 *                 required:
 *                   - name
 *                   - code
 *                   - syllabus
 *                 properties:
 *                   name:
 *                     type: string
 *                   code:
 *                     type: string
 *                   syllabus:
 *                     type: string
 *     responses:
 *       200:
 *         description: Student course successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 enrollment:
 *                   type: string
 *                 course:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     code:
 *                       type: string
 *                     syllabus:
 *                       type: string
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
studentRoutes.patch('/student/patch-student-course', new StudentController().patchStudentCourse)

export default studentRoutes
