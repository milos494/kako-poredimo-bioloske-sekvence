import { IsNotEmpty } from 'class-validator';

export class LCSInputDto {
  @IsNotEmpty()
  sequence1: string;

  @IsNotEmpty()
  sequence2: string;

  indel: number;
  mismatch: number;
  eps: number;
  sigma: number;
}
