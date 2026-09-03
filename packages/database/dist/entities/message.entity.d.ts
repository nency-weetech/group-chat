import { Users } from "./users.entity";
import { Rooms } from "./room.entity";
export declare class Message {
    id: string;
    content: string;
    sender_id: string;
    sender: Users;
    room_id: string;
    room: Rooms;
    created_at: Date;
}
