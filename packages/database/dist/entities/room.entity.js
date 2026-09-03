"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const message_entity_1 = require("./message.entity");
const roomMember_entity_1 = require("./roomMember.entity");
let Rooms = class Rooms {
};
exports.Rooms = Rooms;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Rooms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Rooms.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Rooms.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Rooms.prototype, "owner_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
    __metadata("design:type", users_entity_1.Users)
], Rooms.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rooms.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.room),
    __metadata("design:type", Array)
], Rooms.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => roomMember_entity_1.RoomMember, (roomMember) => roomMember.room),
    __metadata("design:type", Array)
], Rooms.prototype, "members", void 0);
exports.Rooms = Rooms = __decorate([
    (0, typeorm_1.Entity)('rooms')
], Rooms);
