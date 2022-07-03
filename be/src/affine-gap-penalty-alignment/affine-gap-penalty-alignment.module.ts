import { Module } from '@nestjs/common';
import { AffineGapPenaltyAlignmentController } from './affine-gap-penalty-alignment.controller';
import { AffineGapPenaltyAlignmentService } from './affine-gap-penalty-alignment.service';

@Module({
  controllers: [AffineGapPenaltyAlignmentController],
  providers: [AffineGapPenaltyAlignmentService],
})
export class AffineGapPenaltyAlignmentModule {}
