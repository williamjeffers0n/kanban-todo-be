import { Module } from '@nestjs/common';
import { SubTasksService } from './sub-tasks.service';
import { SubTasksController } from './sub-tasks.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SubTasksController],
  providers: [SubTasksService]
})
export class SubTasksModule {}
