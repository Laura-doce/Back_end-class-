import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {minimumSkill} from "../enum/minimun.skill.enum"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text"
    })
    title: string;

    @Column({type: "text"})
    description: string;

    @Column({type: 'integer'}
    )
    weeks: number;

    @Column({
        type: 'enum',
        enum:[   
            "beginner",
            "intermediate",
            "advanced"]
    })
    minimumSkill: minimumSkill

    @Column({type: 'double', 
        default: ()=> 'CURRENT_TIMESTAMP', //Cambiar un valor predeterminado
        name: 'create_at' //Cambiar nombre del atributo
    })
    createAt: number;

    @ManyToOne(()=>Bootcamp, (bootcamp: Bootcamp) => bootcamp.courses)
    bootcamp: Bootcamp;
}

