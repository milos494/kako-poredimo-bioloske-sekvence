import { Body, Controller, Post } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';
import { LocalAlignmentService } from './local-alignment.service';

@Controller('local-alignment')
export class LocalAlignmentController {
  constructor(private readonly service: LocalAlignmentService) {}

  @Post()
  getGlobalAlignment(@Body() input: LCSInputDto) {
    return this.service.localAlignment(input);
  }
}
