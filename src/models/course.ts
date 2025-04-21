import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../sequelize';

export interface CourseAttributes {
  id?: number;
  name: string;
  code: string;
  syllabus: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Course extends Model<CourseAttributes> implements CourseAttributes {
  public id!: number;
  public name!: string;
  public code!: string;
  public syllabus!: string;
}

Course.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  syllabus: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'courses'
});

export default Course;