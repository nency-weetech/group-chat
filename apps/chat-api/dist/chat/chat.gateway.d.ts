import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger;
    server: Server;
    constructor(logger: Logger);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
