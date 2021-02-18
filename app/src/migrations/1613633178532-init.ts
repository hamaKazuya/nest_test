import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1613633178532 implements MigrationInterface {
  name = 'init1613633178532'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `recipe_method` (`id` int NOT NULL AUTO_INCREMENT, `methodNumber` int NOT NULL, `text` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `recipe` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(500) NOT NULL, `description` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'CREATE TABLE `recipe_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `material_name` varchar(255) NOT NULL, `amount` varchar(255) NOT NULL, `unit_type` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    )
    await queryRunner.query(
      'ALTER TABLE `recipe_method` ADD CONSTRAINT `FK_e60a063d84bf6708b1b2b9bde97` FOREIGN KEY (`recipeId`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    )
    await queryRunner.query(
      'ALTER TABLE `recipe_ingredient` ADD CONSTRAINT `FK_1ad3257a7350c39854071fba211` FOREIGN KEY (`recipeId`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `recipe_ingredient` DROP FOREIGN KEY `FK_1ad3257a7350c39854071fba211`',
    )
    await queryRunner.query(
      'ALTER TABLE `recipe_method` DROP FOREIGN KEY `FK_e60a063d84bf6708b1b2b9bde97`',
    )
    await queryRunner.query('DROP TABLE `recipe_ingredient`')
    await queryRunner.query('DROP TABLE `recipe`')
    await queryRunner.query('DROP TABLE `recipe_method`')
  }
}
