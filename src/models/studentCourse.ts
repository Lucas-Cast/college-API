import Course, { CourseAttributes } from './course'
import Student from './student'

export interface StudentCourse {
  name: string
  enrollment: string
  course: CourseAttributes
}

Student.belongsToMany(Course, {
  through: 'student_courses',
  foreignKey: 'studentId',
  otherKey: 'courseId',
  as: 'courses',
  onDelete: 'CASCADE',
})

Course.belongsToMany(Student, {
  through: 'student_courses',
  foreignKey: 'courseId',
  otherKey: 'studentId',
  as: 'students',
  onDelete: 'CASCADE',
})
