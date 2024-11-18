import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CoursesModule } from './courses/courses.module';
@Module({
  imports: [       
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: '2898754',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
  dropSchema: true,
  debug: true,
}), BootcampsModule, UsersModule, ReviewsModule, CoursesModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
