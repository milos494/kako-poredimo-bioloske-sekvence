import { Module } from '@nestjs/common';
import { LocalAlignmentService } from './local-alignment.service';
import { LocalAlignmentController } from './local-alignment.controller';

@Module({
  providers: [LocalAlignmentService],
  controllers: [LocalAlignmentController],
})
export class LocalAlignmentModule {}
