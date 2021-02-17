import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemoController } from './memo.controller'
import { Memo } from '../entities/memo.entity'
import { MemoService } from './memo.service'

@Module({
  controllers: [MemoController],
  imports: [TypeOrmModule.forFeature([Memo])],
  providers: [MemoService],
})
export class MemoModule {}
