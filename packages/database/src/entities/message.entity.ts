import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Rooms } from "./room.entity";

@Entity('message')
export class Message{
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({type: 'text'})
    content!: string;

    @Column({type: 'uuid'})
    sender_id!: string;

    @ManyToOne(() => Users, (user) => user.messages, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'sender_id'})
    sender!: Users;

    @Column({type: 'uuid'})
    room_id!:string;

    @ManyToOne(()=> Rooms, (room)=> room.messages, {onDelete: 'CASCADE'})
    @JoinColumn({name : 'room_id'})
    room!: Rooms;

    @CreateDateColumn()
    created_at!: Date;
}