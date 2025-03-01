import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Review} from 'src/reviews/entities/review.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import {User} from 'src/users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Review, Bootcamp, User])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
