import { Module } from '@nestjs/common';
import { ManhattanModule } from './manhattan/manhattan.module';
import { LcsModule } from './lcs/lcs.module';
import { GlobalAlignmentModule } from './global-alignment/global-alignment.module';
import { LocalAlignmentModule } from './local-alignment/local-alignment.module';
import { AffineGapPenaltyAlignmentModule } from './affine-gap-penalty-alignment/affine-gap-penalty-alignment.module';

@Module({
  imports: [
    ManhattanModule,
    LcsModule,
    GlobalAlignmentModule,
    LocalAlignmentModule,
    AffineGapPenaltyAlignmentModule,
  ],
})
export class AppModule {}
