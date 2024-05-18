import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("videogames")
export class Videogames {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;
}