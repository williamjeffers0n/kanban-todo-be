import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './modules/boards/boards.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { StatusModule } from './modules/status/status.module';
import { SubTasksModule } from './modules/sub-tasks/sub-tasks.module';

@Module({
  imports: [BoardsModule, TasksModule, StatusModule, SubTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
