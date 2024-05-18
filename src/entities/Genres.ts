import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("genres")
export class Genres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}