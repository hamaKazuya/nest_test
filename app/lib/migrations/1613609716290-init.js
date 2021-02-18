"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1613609716290 = void 0;
class init1613609716290 {
    constructor() {
        this.name = 'init1613609716290';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `recipe_method` (`id` int NOT NULL AUTO_INCREMENT, `recipe_id` int NULL, `methodNumber` int NOT NULL, `text` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipeIdId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `recipe` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(500) NOT NULL, `description` text NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `recipe_ingredient` (`id` int NOT NULL AUTO_INCREMENT, `recipe_id` int NULL, `material_name` varchar(255) NOT NULL, `amount` varchar(255) NOT NULL, `unit_type` varchar(255) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `recipeIdId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `recipe_method` ADD CONSTRAINT `FK_e99e8acb9cce76592505911c251` FOREIGN KEY (`recipeIdId`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `recipe_ingredient` ADD CONSTRAINT `FK_9f5fa2438a741fdeffc729aab7d` FOREIGN KEY (`recipeIdId`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `recipe_ingredient` DROP FOREIGN KEY `FK_9f5fa2438a741fdeffc729aab7d`");
        await queryRunner.query("ALTER TABLE `recipe_method` DROP FOREIGN KEY `FK_e99e8acb9cce76592505911c251`");
        await queryRunner.query("DROP TABLE `recipe_ingredient`");
        await queryRunner.query("DROP TABLE `recipe`");
        await queryRunner.query("DROP TABLE `recipe_method`");
    }
}
exports.init1613609716290 = init1613609716290;
//# sourceMappingURL=1613609716290-init.js.map