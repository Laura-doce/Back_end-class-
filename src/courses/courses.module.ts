import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Bootcamp])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
