import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateStatusDto {
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
  readonly task?: Prisma.TaskCreateOrConnectWithoutStatusInput;
}
