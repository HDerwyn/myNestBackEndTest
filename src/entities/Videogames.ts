import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Genres } from "./Genres";


@Entity("videogames")
export class Videogames {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    releaseDate: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    platform: string;

    @ManyToMany(()=> Genres)
    @JoinTable()
    genres: Genres[]

}