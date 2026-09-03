import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Rooms } from "./room.entity";

export enum RoomMemberRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

@Entity('room_members')
export class RoomMember{
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({type: 'uuid'})
    user_id!: string;

    @ManyToOne(()=> Users, (user)=> user.room_memberships, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user!: Users;

    @Column({type: 'uuid'})
    room_id!: string;

    @ManyToOne(() => Rooms, (room)=> room.members, {onDelete: 'CASCADE'})
    @JoinColumn({name : 'room_id'})
    room!: Rooms;

    @Column({type: 'enum', enum: RoomMemberRole, default: RoomMemberRole.MEMBER})
    role!: RoomMemberRole;
    
    @CreateDateColumn()
    joined_at!: Date;
}