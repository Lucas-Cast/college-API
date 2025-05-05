import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  BelongsToMany,
  Model,
} from 'sequelize-typescript'
import { Course } from '../../course/entities/course.entity'
import { StudentCourses } from '../../student-courses/entities/student-course.entity'

@Table
export class Student extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number

  @Column
  declare name: string

  @Column
  declare enrollment: string

  @BelongsToMany(() => Course, () => StudentCourses)
  declare courses: Course[]
}
