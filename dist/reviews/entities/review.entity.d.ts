import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { User } from "src/users/entities/user.entity";
export declare class Review {
    id: number;
    title: string;
    comment: string;
    rating: number;
    bootcamp: Bootcamp;
    user: User;
}
