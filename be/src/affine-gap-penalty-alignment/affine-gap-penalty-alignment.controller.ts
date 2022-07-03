import { Body, Controller, Post } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';
import { AffineGapPenaltyAlignmentService } from './affine-gap-penalty-alignment.service';

@Controller('affine-gap-penalty-alignment')
export class AffineGapPenaltyAlignmentController {
  constructor(private readonly service: AffineGapPenaltyAlignmentService) {}

  @Post()
  getGlobalAlignment(@Body() input: LCSInputDto) {
    return this.service.affineGapPenaltyAlignment(input);
  }
}
