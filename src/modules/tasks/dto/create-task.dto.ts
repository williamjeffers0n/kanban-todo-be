import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly description?: string;

  @ApiProperty()
  @IsNumber()
  readonly statusId: number;

  @ApiProperty()
  @IsOptional() 
  @IsObject()
  readonly subTask?: Prisma.SubTaskCreateNestedManyWithoutTaskInput;
 
}
