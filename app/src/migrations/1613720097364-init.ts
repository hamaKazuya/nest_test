import {MigrationInterface, QueryRunner} from "typeorm";

export class init1613720097364 implements MigrationInterface {
    name = 'init1613720097364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `recipe_method` (`id` int NOT NULL AUTO_INCREMENT, `methodNumber` int NOT NULL, `text` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipe_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `recipe` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `recipe_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `material_name` varchar(255) NOT NULL, `amount` int NOT NULL, `unit_type` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipe_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `recipe_method` ADD CONSTRAINT `FK_cef84332f161d28296cff7d21f0` FOREIGN KEY (`recipe_id`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `recipe_ingredient` ADD CONSTRAINT `FK_256c22ec24d2d590b39e11a3ee4` FOREIGN KEY (`recipe_id`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `recipe_ingredient` DROP FOREIGN KEY `FK_256c22ec24d2d590b39e11a3ee4`");
        await queryRunner.query("ALTER TABLE `recipe_method` DROP FOREIGN KEY `FK_cef84332f161d28296cff7d21f0`");
        await queryRunner.query("DROP TABLE `recipe_ingredient`");
        await queryRunner.query("DROP TABLE `recipe`");
        await queryRunner.query("DROP TABLE `recipe_method`");
    }

}
