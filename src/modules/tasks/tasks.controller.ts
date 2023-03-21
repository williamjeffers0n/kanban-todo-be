import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiQuery({ name: 'id', required: false, type: Number })
  @Get()
  findAll(@Query('statusId') statusId: number,) {
    return this.tasksService.findAll({ where: {statusId}});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update({ where: {id: +id}, data: updateTaskDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove({id: +id});
  }
}
