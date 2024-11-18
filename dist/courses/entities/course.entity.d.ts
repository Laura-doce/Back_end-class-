import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { minimumSkill } from "../enum/minimun.skill.enum";
export declare class Course {
    id: number;
    title: string;
    description: string;
    weeks: number;
    minimumSkill: minimumSkill;
    createAt: number;
    bootcamp: Bootcamp;
}
