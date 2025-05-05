import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentModule } from './student/student.module'
import { StudentCoursesModule } from './student-courses/student-courses.module'
import { CourseModule } from './course/course.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [DatabaseModule, StudentModule, StudentCoursesModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
