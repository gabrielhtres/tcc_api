import { Prisma, PrismaClient, Plot } from '@prisma/client';

export class PlotController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Plot[]> {
        return this.prisma.plot.findMany();
    }

    async getById(id: number): Promise<Plot | null> {
        return this.prisma.plot.findUnique({ where: { id } });
    }

    async create(data: Prisma.PlotCreateInput): Promise<Plot> {
        return this.prisma.plot.create({ data });
    }

    async update(
        id: number,
        data: Prisma.PlotUpdateInput
    ): Promise<Plot | null> {
        return this.prisma.plot.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Plot | null> {
        return this.prisma.plot.delete({ where: { id } });
    }
}
