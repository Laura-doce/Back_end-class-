import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
    review: Review[];
    bootcamp: Bootcamp[];
}
