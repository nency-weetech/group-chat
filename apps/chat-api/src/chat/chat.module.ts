import { Logger, Module } from "@nestjs/common";
import { ChatGateway } from "./chat.gateway.js";

@Module({
    providers: [ChatGateway, Logger]
})
export class ChatModule{}