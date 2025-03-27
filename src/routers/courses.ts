import { Router } from 'express'
import CourseController from '../controllers/courses'

const coursesRoutes = Router()

coursesRoutes.post('/course/add-course', new CourseController().addCourse)

coursesRoutes.get(
  '/course/get-course-by-code',
  new CourseController().getCourseByCode
)

coursesRoutes.get('/course/get-courses', new CourseController().getCourses)

coursesRoutes.delete(
  '/course/delete-course-by-code',
  new CourseController().deleteCourseByCode
)

coursesRoutes.put(
  '/course/edit-course-by-code',
  new CourseController().editCourseByCode
)

coursesRoutes.patch('/course/patch-course-name', new CourseController().patchCourseName)

export default coursesRoutes
