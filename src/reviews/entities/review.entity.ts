import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import {User} from "src/users/entities/user.entity";


@Entity('reviews')
export class Review {

//Atributos    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30})
    title: string;

    @Column({type: 'text'})
    comment: string;

    @Column({type: 'integer'})
    rating: number;

//Relaciones    
    @ManyToOne(()=> Bootcamp, (bootcamp: Bootcamp) => bootcamp.reviews)
    bootcamp: Bootcamp;

    @ManyToOne(()=> User, (user: User) => user.review)
    user: User;

}
