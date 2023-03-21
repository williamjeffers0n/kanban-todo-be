import { Injectable } from '@nestjs/common';
import { Prisma, SubTask } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class SubTasksService {

  constructor(private prisma: PrismaService) {}
  
  create(data: Prisma.SubTaskCreateInput):  Promise<SubTask> {
    return this.prisma.subTask.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubTaskWhereUniqueInput;
    where?: Prisma.SubTaskWhereInput;
    orderBy?: Prisma.SubTaskOrderByWithRelationInput;
  }): Promise<SubTask[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.subTask.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        task: true,
      }
    });
  }

  findOne(id: number) : Promise<SubTask>  {
    return this.prisma.subTask.findUnique({
      where: { id },
    });
  }

  update(params: {
    where: Prisma.SubTaskWhereUniqueInput;
    data: Prisma.SubTaskUpdateInput;
  }): Promise<SubTask> {
    const { data, where } = params;
    return this.prisma.subTask.update({
      data,
      where,
    });
  }

  remove(where: Prisma.SubTaskWhereUniqueInput): Promise<SubTask>  {
    return this.prisma.subTask.delete({
      where,
    });
  }
}
