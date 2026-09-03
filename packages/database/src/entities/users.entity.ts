import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./message.entity";
import { RoomMember } from "./roomMember.entity";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: "varchar", length: 50, unique: true})
    username!:string;

    @Column({type: 'varchar', unique: true})
    email!:string;

    @Column({type: 'varchar'})
    password!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    update_at!: Date;

    @OneToMany(() => Message, (message) => message.sender)
    messages!: Message[];

    @OneToMany(() => RoomMember, (roomMember) => roomMember.user)
    room_memberships!: RoomMember[];
}