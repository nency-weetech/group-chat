var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ChatGateway_1;
import { Logger } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
let ChatGateway = ChatGateway_1 = class ChatGateway {
    logger;
    server;
    constructor(logger) {
        this.logger = logger;
    }
    handleConnection(client) {
        this.logger.log(`Client Connenct ${client.id}`, ChatGateway_1.name);
    }
    handleDisconnect(client) {
        this.logger.log(`Client Disconnect ${client.id}`, ChatGateway_1.name);
    }
};
__decorate([
    WebSocketServer(),
    __metadata("design:type", Server)
], ChatGateway.prototype, "server", void 0);
ChatGateway = ChatGateway_1 = __decorate([
    WebSocketGateway({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [Logger])
], ChatGateway);
export { ChatGateway };
//# sourceMappingURL=chat.gateway.js.map