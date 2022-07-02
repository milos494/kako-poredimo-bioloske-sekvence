import { Module } from '@nestjs/common';
import { ManhattanModule } from './manhattan/manhattan.module';
import { LcsModule } from './lcs/lcs.module';
import { GlobalAlignmentModule } from './global-alignment/global-alignment.module';

@Module({
  imports: [ManhattanModule, LcsModule, GlobalAlignmentModule],
})
export class AppModule {}
