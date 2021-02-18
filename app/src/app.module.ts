import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecipeModule } from './recipe/recipe.module'
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RecipeModule, HealthcheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
