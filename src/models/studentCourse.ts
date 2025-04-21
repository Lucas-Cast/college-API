import Course, { CourseAttributes } from "./course"
import Student from "./student";

export interface StudentCourse {
    name: string
    enrollment: string
    course: CourseAttributes
}

Student.belongsToMany(Course, { 
    through: 'StudentCourses', 
    foreignKey: 'studentId',
    otherKey: 'courseId',
    as: 'courses'
  });
  
  Course.belongsToMany(Student, { 
    through: 'StudentCourses', 
    foreignKey: 'courseId',
    otherKey: 'studentId',
    as: 'students'
  });