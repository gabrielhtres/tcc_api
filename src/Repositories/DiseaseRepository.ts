import { Prisma, PrismaClient, Disease } from '@prisma/client';

export class DiseaseRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // async getAll(): Promise<User[]> {
    //     const users = await this.prisma.user.findMany();
    //     return users;
    // }

    async getById(id: number): Promise<Disease | null> {
        return await this.prisma.disease.findUnique({
            where: { id },
            include: {
                status: true,
                defaultDisease: true,
            },
        });
    }

    async getByPhaseId(id: number): Promise<Partial<Disease>[] | null> {
        return await this.prisma.disease.findMany({
            where: { phaseId: id },
            select: {
                id: true,
                defaultDisease: {
                    select: {
                        id: true,
                        commonNames: true,
                    },
                },
                statusId: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
    }

    async create(data: Prisma.DiseaseCreateInput): Promise<Disease> {
        return await this.prisma.disease.create({ data });
    }

    async update(
        id: number,
        data: Prisma.DiseaseUpdateInput
    ): Promise<Disease | null> {
        return await this.prisma.disease.update({
            where: { id },
            include: {
                status: true,
            },
            data,
        });
    }

    async delete(id: number): Promise<Disease | null> {
        return await this.prisma.disease.delete({ where: { id } });
    }
}
