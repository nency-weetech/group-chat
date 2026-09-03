import { Users } from "./users.entity";
import { Message } from "./message.entity";
import { RoomMember } from "./roomMember.entity";
export declare class Rooms {
    id: string;
    name: string;
    description: string;
    owner_id: string;
    owner: Users;
    created_at: Date;
    messages: Message[];
    members: RoomMember[];
}
