import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Message } from "./message.entity";
import { RoomMember } from "./roomMember.entity";

@Entity('rooms')
export class Rooms{
    @PrimaryGeneratedColumn('uuid')
    id!:string;

    @Column({type:'varchar', length: 100})
    name!: string;

    @Column({type : 'varchar', nullable: true})
    description!: string;

    @Column({type: 'uuid'})
    owner_id!: string;

    @ManyToOne(() => Users, {onDelete: 'CASCADE'})
    @JoinColumn({name : 'owner_id'})
    owner!: Users;

    @CreateDateColumn()
    created_at!: Date;

    @OneToMany(() => Message, (message) => message.room)
    messages!: Message[];

    @OneToMany(() => RoomMember, (roomMember)=> roomMember.room)
    members!: RoomMember[];
}