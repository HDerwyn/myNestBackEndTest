import { Entity, Column, PrimaryColumn } from "typeorm"
import {UUID, UUIDString, UUIDV4} from "uuid"

@Entity("users")
export class User {
    @PrimaryColumn("uuid", { default: () => "uuid_create()" })
    id: UUID;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;
}