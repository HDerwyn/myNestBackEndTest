import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import {UUID, UUIDString, UUIDV4} from "uuid"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: UUID;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;
}