import { Message } from "./message.entity";
import { RoomMember } from "./roomMember.entity";
export declare class Users {
    id: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    update_at: Date;
    messages: Message[];
    room_memberships: RoomMember[];
}
