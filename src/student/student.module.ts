import { Module } from '@nestjs/common'
import { StudentService } from './student.service'
import { StudentController } from './student.controller'
import { studentProviders } from './entities/student.providers'
import { DatabaseModule } from '../database/database.module'
import StudentRepository from './student.repository'
import { CourseModule } from '../course/course.module'

@Module({
  imports: [DatabaseModule, CourseModule],
  controllers: [StudentController],
  providers: [StudentService, ...studentProviders, StudentRepository],
})
export class StudentModule {}
