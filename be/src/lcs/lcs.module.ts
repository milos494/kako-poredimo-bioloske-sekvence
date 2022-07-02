import { Module } from '@nestjs/common';
import { LcsService } from './lcs.service';
import { LcsController } from './lcs.controller';

@Module({
  controllers: [LcsController],
  providers: [LcsService],
})
export class LcsModule {}
