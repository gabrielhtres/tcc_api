import { Prisma, PrismaClient, Log } from '@prisma/client';

export class LogController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Log[]> {
        return this.prisma.log.findMany();
    }

    async getById(id: number): Promise<Log | null> {
        return this.prisma.log.findUnique({ where: { id } });
    }

    async create(data: Prisma.LogCreateInput): Promise<Log> {
        return this.prisma.log.create({ data });
    }

    async update(id: number, data: Prisma.LogUpdateInput): Promise<Log | null> {
        return this.prisma.log.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Log | null> {
        return this.prisma.log.delete({ where: { id } });
    }
}
