import { IsNotEmpty } from 'class-validator';

export class ManhattanInputDto {
  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  input: { [key: string]: { [key: string]: number } };
}
