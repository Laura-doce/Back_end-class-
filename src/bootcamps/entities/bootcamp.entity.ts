import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import {User} from "src/users/entities/user.entity";

@Entity('bootcamps')
export class Bootcamp {
//Atributos    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 30
    })
    name: string;

    @Column({
        type: 'integer',
    })
    phone: number;

    @Column({type:'text', nullable: true })
    address: string;

    @Column({type: 'text'})
    topic: string;

    @Column({type: 'double', name: 'averagerating'})
    averageRating: number;

    @Column({type: 'double', 
        default: ()=> 'CURRENT_TIMESTAMP',
        name: 'create_at'}
    )
    createAt: number;


//Relaciones//
    @OneToMany(()=>Course, (course: Course) => course.bootcamp)
    courses: Course[];

    @OneToMany(()=>Review, (review: Review) => review.bootcamp)
    reviews: Review[];

    @ManyToOne(()=>User, (user: User) => user.bootcamp)
    user: User;
}
