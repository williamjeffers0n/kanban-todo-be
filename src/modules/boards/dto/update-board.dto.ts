import { IsOptional, IsString } from 'class-validator';
 

export class UpdateBoardDto {
    @IsString()
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional()
    readonly createdAt?: string;
    @IsString()
    @IsOptional()
    readonly updatedAt?: string;
}
