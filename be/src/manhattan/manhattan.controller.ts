import { Body, Controller, Post } from '@nestjs/common';
import { ManhattanInputDto } from 'src/dto/manhattan-input.dto';
import { ManhattanService } from './manhattan.service';

@Controller('manhattan')
export class ManhattanController {
  constructor(private readonly service: ManhattanService) {}

  @Post()
  getManhattan(@Body() input: ManhattanInputDto) {
    return this.service.manhattan(input);
  }
}
