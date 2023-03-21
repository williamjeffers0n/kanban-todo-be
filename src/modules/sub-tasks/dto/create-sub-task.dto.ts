import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateSubTaskDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsBoolean()
  readonly isCompleted?: boolean;

  @ApiProperty()
  @IsNumber()
  readonly taskId: number;

}
