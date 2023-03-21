import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Board, Prisma } from '@prisma/client';

@Injectable()
export class BoardsService {

  constructor(private prisma: PrismaService) {}
  
  create(data: Prisma.BoardCreateInput):  Promise<Board> {
    return this.prisma.board.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BoardWhereUniqueInput;
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput;
  }): Promise<Board[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.board.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        status: true,
      }
    });
  }

  findOne(id: number) : Promise<Board>  {
    return this.prisma.board.findUnique({
      where: { id },
    });
  }

  update(params: {
    where: Prisma.BoardWhereUniqueInput;
    data: Prisma.BoardUpdateInput;
  }): Promise<Board> {
    const { data, where } = params;
    return this.prisma.board.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BoardWhereUniqueInput): Promise<Board>  {
    return this.prisma.board.delete({
      where,
    });
  }
}
