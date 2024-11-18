import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
export declare class Bootcamp {
    id: number;
    name: string;
    phone: number;
    address: string;
    topic: string;
    averageRating: number;
    createAt: number;
    courses: Course[];
    reviews: Review[];
    user: User;
}
