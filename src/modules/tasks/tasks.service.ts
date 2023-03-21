import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  
  create(data: Prisma.TaskCreateInput):  Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaskWhereUniqueInput;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        subTask: true,
      }
    });
  }

  findOne(id: number) : Promise<Task>  {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  update(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { data, where } = params;
    return this.prisma.task.update({
      data,
      where,
    });
  }

  remove(where: Prisma.TaskWhereUniqueInput): Promise<Task>  {
    return this.prisma.task.delete({
      where,
    });
  }
}
