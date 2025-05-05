import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  BelongsToMany,
  Model,
} from 'sequelize-typescript'
import { Student } from '../../student/entities/student.entity'
import { StudentCourses } from '../../student-courses/entities/student-course.entity'

@Table
export class Course extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number

  @Column
  declare name: string

  @Column
  declare code: string

  @Column
  declare syllabus: string

  @BelongsToMany(() => Student, () => StudentCourses)
  declare students: Student[]
}
