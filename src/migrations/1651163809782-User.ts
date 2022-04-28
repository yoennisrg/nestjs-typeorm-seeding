import {MigrationInterface, QueryRunner} from "typeorm";

export class User1651163809782 implements MigrationInterface {
    name = 'User1651163809782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "age" TO "value"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "value" TO "age"`);
    }

}
