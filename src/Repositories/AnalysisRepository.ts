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
        return await this.prisma.analysis.findUnique({
            where: { id },
            include: {
                status: true,
            },
        });
    }

    async getByUserId(id: number): Promise<Partial<Analysis>[] | null> {
        return await this.prisma.analysis.findMany({
            where: { userId: id },
            select: {
                id: true,
                name: true,
                statusId: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
            // include: {
            //     status: {
            //         select: {
            //             id: true,
            //             name: true,
            //         },
            //     },
            // },
        });
    }

    async create(data: Prisma.AnalysisCreateInput): Promise<Analysis> {
        return await this.prisma.analysis.create({ data });
    }

    async update(
        id: number,
        data: Prisma.AnalysisUpdateInput
    ): Promise<Analysis | null> {
        return await this.prisma.analysis.update({
            where: { id },
            include: {
                status: true,
            },
            data,
        });
    }

    async delete(id: number): Promise<Analysis | null> {
        return await this.prisma.analysis.delete({ where: { id } });
    }
}
