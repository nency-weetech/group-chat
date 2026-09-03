"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1788430047732 = void 0;
class InitialSchema1788430047732 {
    constructor() {
        this.name = 'InitialSchema1788430047732';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "rooms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying, "owner_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."room_members_role_enum" AS ENUM('admin', 'member')`);
        await queryRunner.query(`CREATE TABLE "room_members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "room_id" uuid NOT NULL, "role" "public"."room_members_role_enum" NOT NULL DEFAULT 'member', "joined_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4493fab0433f741b7cf842e6038" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(50) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" text NOT NULL, "sender_id" uuid NOT NULL, "room_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD CONSTRAINT "FK_9f38c339cb7a6e33b02f9d2c743" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_members" ADD CONSTRAINT "FK_b2d15baf5b46ed9659bd71fbb43" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_members" ADD CONSTRAINT "FK_e6cf45f179a524427ddf8bacd8e" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_c0ab99d9dfc61172871277b52f6" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_a9edf3bbd4fc17c42ee8677b9ce" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_a9edf3bbd4fc17c42ee8677b9ce"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_c0ab99d9dfc61172871277b52f6"`);
        await queryRunner.query(`ALTER TABLE "room_members" DROP CONSTRAINT "FK_e6cf45f179a524427ddf8bacd8e"`);
        await queryRunner.query(`ALTER TABLE "room_members" DROP CONSTRAINT "FK_b2d15baf5b46ed9659bd71fbb43"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP CONSTRAINT "FK_9f38c339cb7a6e33b02f9d2c743"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "room_members"`);
        await queryRunner.query(`DROP TYPE "public"."room_members_role_enum"`);
        await queryRunner.query(`DROP TABLE "rooms"`);
    }
}
exports.InitialSchema1788430047732 = InitialSchema1788430047732;
