import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { TransformResponseInterceptor } from 'src/interceptors/transform-response.interceptor';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
@UseInterceptors(TransformResponseInterceptor)
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @ApiQuery({ name: 'id', required: false, type: Number })
  @Get()
  findAll(
    @Query('id') id: string,
  ) {
    return this.boardsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.update({ where: {id: +id}, data: updateBoardDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsService.remove({id: +id});
  }
}
