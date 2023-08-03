import { Prisma, PrismaClient, Analysis } from '@prisma/client';

export class AnalysisController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Analysis[]> {
        return this.prisma.analysis.findMany();
    }

    async getById(id: number): Promise<Analysis | null> {
        return this.prisma.analysis.findUnique({ where: { id } });
    }

    async create(data: Prisma.AnalysisCreateInput): Promise<Analysis> {
        return this.prisma.analysis.create({ data });
    }

    async update(
        id: number,
        data: Prisma.AnalysisUpdateInput
    ): Promise<Analysis | null> {
        return this.prisma.analysis.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Analysis | null> {
        return this.prisma.analysis.delete({ where: { id } });
    }
}
