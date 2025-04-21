import sequelize from "../../sequelize";
import Course, { CourseAttributes } from "./course"
import { Model, DataTypes } from 'sequelize';

export interface StudentRequest {
  name: string
  enrollment: string
  coursesIds?: number[]
}

export interface StudentResponse {
  name: string
  enrollment: string
  courses: CourseAttributes[]
}


export interface StudentAttributes {
  id?: number;
  name: string;
  enrollment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Student extends Model<StudentAttributes> implements StudentAttributes {
  public id!: number;
  public name!: string;
  public enrollment!: string;

  public readonly courses?: Course[];

  public addCourse!: (course: Course, options?: any) => Promise<any>;
  public getCourses!: (options?: any) => Promise<Course[]>;
  public setCourses!: (courses: Course[], options?: any) => Promise<any>;
  public removeCourse!: (course: Course, options?: any) => Promise<any>;
  public countCourses!: (options?: any) => Promise<number>;
}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enrollment: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: 'students'
});

export default Student;