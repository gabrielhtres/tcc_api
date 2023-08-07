import { Prisma, PrismaClient, Analysis } from '@prisma/client';

export class AnalysisRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // async getAll(): Promise<User[]> {
    //     const users = await this.prisma.user.findMany();
    //     return users;
    // }

    async getById(id: number): Promise<Analysis | null> {
        return this.prisma.analysis.findUnique({ where: { id } });
    }

    async getByUserId(id: number): Promise<Analysis[] | null> {
        return this.prisma.analysis.findMany({ where: { userId: id } });
    }

    async create(data: Prisma.AnalysisCreateInput): Promise<Analysis> {
        const analysis = await this.prisma.analysis.create({ data });
        return analysis;
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
