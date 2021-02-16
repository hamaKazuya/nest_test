import {MigrationInterface, QueryRunner} from "typeorm";

export class createMemo1613438421872 implements MigrationInterface {
    name = 'createMemo1613438421872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "description" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "memo"`);
    }

}
