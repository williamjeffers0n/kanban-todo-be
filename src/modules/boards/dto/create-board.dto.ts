import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty() 
  @IsString()
  readonly name: string;
  @IsString()
  readonly createdAt?: string;
  @IsString()
  readonly updatedAt?: string;
  @ApiProperty()
  @IsOptional() 
  @IsObject()
  readonly status?: Prisma.StatusCreateNestedManyWithoutBordInput;
}
