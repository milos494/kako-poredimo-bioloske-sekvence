import { Module } from '@nestjs/common';
import { ManhattanController } from './manhattan.controller';
import { ManhattanService } from './manhattan.service';

@Module({
  controllers: [ManhattanController],
  providers: [ManhattanService],
})
export class ManhattanModule {}
