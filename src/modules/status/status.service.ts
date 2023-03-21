import { Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StatusService {

constructor(private prisma: PrismaService) {}
  
  create(data: Prisma.StatusCreateInput):  Promise<Status> {
    return this.prisma.status.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StatusWhereUniqueInput;
    where?: Prisma.StatusWhereInput;
    orderBy?: Prisma.StatusOrderByWithRelationInput;
  }): Promise<Status[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.status.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        task : {
          include: {
            subTask: true
          }
        }
      }
    });
  }

  findOne(id: number) : Promise<Status>  {
    return this.prisma.status.findUnique({
      where: { id },
    });
  }

  update(params: {
    where: Prisma.StatusWhereUniqueInput;
    data: Prisma.StatusUpdateInput;
  }): Promise<Status> {
    const { data, where } = params;
    return this.prisma.status.update({
      data,
      where,
    });
  }

  remove(where: Prisma.StatusWhereUniqueInput): Promise<Status>  {
    return this.prisma.status.delete({
      where,
    });
  }
}
