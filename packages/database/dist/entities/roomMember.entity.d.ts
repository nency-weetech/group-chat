import { Users } from "./users.entity";
import { Rooms } from "./room.entity";
export declare enum RoomMemberRole {
    ADMIN = "admin",
    MEMBER = "member"
}
export declare class RoomMember {
    id: string;
    user_id: string;
    user: Users;
    room_id: string;
    room: Rooms;
    role: RoomMemberRole;
    joined_at: Date;
}
