import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { studentCoursesProviders } from './entities/student-course.providers'

@Module({
  imports: [DatabaseModule],
  providers: [...studentCoursesProviders],
  exports: [...studentCoursesProviders],
})
export class StudentCoursesModule {}
