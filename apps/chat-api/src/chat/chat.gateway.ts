import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server : Server;

    constructor(private readonly logger : Logger){}

    handleConnection(client: Socket) {
        this.logger.log(`Client Connenct ${client.id}`, ChatGateway.name)
    }
    handleDisconnect(client: Socket) {
        this.logger.log(`Client Disconnect ${client.id}`, ChatGateway.name)
    }
}