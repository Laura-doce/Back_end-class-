import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { Bootcamp } from './entities/bootcamp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bootcamp, Course, Review])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
