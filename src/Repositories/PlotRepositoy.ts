import { Prisma, PrismaClient, Plot } from '@prisma/client';

export class PlotRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // async getAll(): Promise<User[]> {
    //     const users = await this.prisma.user.findMany();
    //     return users;
    // }

    async getById(id: number): Promise<Plot | null> {
        return this.prisma.plot.findUnique({
            where: { id },
            include: {
                status: true,
            },
        });
    }

    async getByAnalysisId(id: number): Promise<Plot[] | null> {
        return this.prisma.plot.findMany({
            where: { analysisId: id },
            include: {
                status: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }

    async create(data: Prisma.PlotCreateInput): Promise<Plot> {
        const plot = await this.prisma.plot.create({ data });
        return plot;
    }

    async update(
        id: number,
        data: Prisma.PlotUpdateInput
    ): Promise<Plot | null> {
        return this.prisma.plot.update({
            where: { id },
            include: {
                status: true,
            },
            data,
        });
    }

    async delete(id: number): Promise<Plot | null> {
        return this.prisma.plot.delete({ where: { id } });
    }
}
