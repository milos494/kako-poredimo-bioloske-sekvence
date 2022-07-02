import { Body, Controller, Post } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';
import { GlobalAlignmentService } from './global-alignment.service';

@Controller('global-alignment')
export class GlobalAlignmentController {
  constructor(private readonly service: GlobalAlignmentService) {}

  @Post()
  getGlobalAlignment(@Body() input: LCSInputDto) {
    return this.service.globalAlignment(input);
  }
}
