import { Module } from '@nestjs/common';
import { GlobalAlignmentController } from './global-alignment.controller';
import { GlobalAlignmentService } from './global-alignment.service';

@Module({
  controllers: [GlobalAlignmentController],
  providers: [GlobalAlignmentService],
})
export class GlobalAlignmentModule {}
