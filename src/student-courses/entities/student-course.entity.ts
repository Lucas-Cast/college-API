import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Student } from '../../student/entities/student.entity'
import { Course } from '../../course/entities/course.entity'

@Table
export class StudentCourses extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number

  @ForeignKey(() => Student)
  @Column
  declare studentId: number

  @ForeignKey(() => Course)
  @Column
  declare courseId: number
}
