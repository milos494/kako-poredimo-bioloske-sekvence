import { Body, Controller, Post } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';
import { LcsService } from './lcs.service';

@Controller('lcs')
export class LcsController {
  constructor(private readonly service: LcsService) {}

  @Post()
  getLcs(@Body() input: LCSInputDto) {
    return this.service.lcs(input);
  }
}
