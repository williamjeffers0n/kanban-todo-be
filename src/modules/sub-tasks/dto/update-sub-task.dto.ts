import { ApiProperty} from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSubTaskDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly isCompleted?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly taskId: number;
}
