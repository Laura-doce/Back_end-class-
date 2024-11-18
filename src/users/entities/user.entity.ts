import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

@Entity('users')
export class User {
//Atributos
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 30})
    name: string

    @Column({type: 'varchar', length:30})
    email: string

    @Column({type: 'varchar', length:30})
    role: string

    @Column({type: 'varchar', length:10})
    password: string

//Relaciones
    @OneToMany(()=>Review, (review: Review)=> review.user)
    review: Review[];

    @OneToMany(()=>Bootcamp, (bootcamp: Bootcamp) => bootcamp.user)
    bootcamp: Bootcamp[];

}
