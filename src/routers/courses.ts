import { Router } from 'express'
import CourseController from '../controllers/courses'

const coursesRoutes = Router()

/**
 * @openapi
 * '/course/add-course':
 *  post:
 *     tags:
 *     - Course
 *     summary: Register a new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *               - syllabus
 *             properties:
 *               code:
 *                 type: string
 *                 example: "123456789"
 *               name:
 *                 type: string
 *                 example: "outro curso"
 *               syllabus:
 *                 type: string
 *                 example: "OC"
 *     responses:
 *       200:
 *         description: Course successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Course successfully registered"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid course data"
 */
coursesRoutes.post('/course/add-course', new CourseController().addCourse)

/** 
 * @openapi
 * '/course/get-course-by-id':
 *  get:
 *     tags:
 *     - Course
 *     summary: Get course details by id
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           example: "12345"
 *           type: string
 *         description: The unique id of the course
 *     responses:
 *       200:
 *         description: Course details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Mathematics 101"
 *                 code:
 *                   type: string
 *                   example: "MATH101"
 *                 syllabus:
 *                   type: string
 *                   example: "Introduction to algebra and calculus"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course id is required"
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course not found"
 */
coursesRoutes.get(
  '/course/get-course-by-id',
  new CourseController().getCourseById
)

/** 
 * @openapi
 * '/course/get-courses':
 *  get:
 *     tags:
 *     - Course
 *     summary: Get a list of all courses
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Mathematics 101"
 *                   code:
 *                     type: string
 *                     example: "MATH101"
 *                   syllabus:
 *                     type: string
 *                     example: "Introduction to algebra and calculus"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */
coursesRoutes.get('/course/get-courses', new CourseController().getCourses)

/** 
 * @openapi
 * '/course/delete-course-by-id':
 *  delete:
 *     tags:
 *     - Course
 *     summary: Delete a course by id
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique id of the course to be deleted
 *     responses:
 *       200:
 *         description: Course successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Course successfully deleted"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid course id"
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */
coursesRoutes.delete(
  '/course/delete-course-by-id',
  new CourseController().deleteCourseById
)

/** 
 * @openapi
 * '/course/edit-course-by-id':
 *  put:
 *     tags:
 *     - Course
 *     summary: Edit a course by id
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique id of the course to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Course Name"
 *               code:
 *                 type: string
 *                 example: "NEWCODE123"
 *               syllabus:
 *                 type: string
 *                 example: "Updated syllabus content"
 *     responses:
 *       200:
 *         description: Course successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Course successfully updated"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid request data"
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */
coursesRoutes.put(
  '/course/edit-course-by-id',
  new CourseController().editCourseById
)

/** 
 * @openapi
 * '/course/patch-course-name':
 *  patch:
 *     tags:
 *     - Course
 *     summary: Update only the name of a course by id
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique id of the course to be updated
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
 *                 example: "Updated Course Name"
 *     responses:
 *       200:
 *         description: Course name successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Course name successfully updated"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid request data"
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */
coursesRoutes.patch('/course/patch-course-name', new CourseController().patchCourseName)

export default coursesRoutes
