import { Module } from '@nestjs/common'
import { CourseService } from './course.service'
import { CourseController } from './course.controller'
import { courseProviders } from './entities/course.providers'
import { DatabaseModule } from '../database/database.module'
import CourseRepository from './course.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [CourseService, ...courseProviders, CourseRepository],
  exports: [...courseProviders],
})
export class CourseModule {}
