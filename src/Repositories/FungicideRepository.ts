import { Prisma, PrismaClient, Fungicide } from '@prisma/client';

export class FungicideRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getById(id: number): Promise<Fungicide | null> {
        return await this.prisma.fungicide.findUnique({
            where: { id },
            include: {
                status: true,
                disease: true,
            },
        });
    }

    async getByDiseaseId(id: number): Promise<Partial<Fungicide>[] | null> {
        return await this.prisma.fungicide.findMany({
            where: { diseaseId: id },
            select: {
                id: true,
                defaultFungicide: {
                    select: {
                        tradeMark: true,
                    },
                },
                statusId: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
    }

    async create(data: Prisma.FungicideCreateInput): Promise<Fungicide> {
        return await this.prisma.fungicide.create({ data });
    }

    async update(
        id: number,
        data: Prisma.FungicideUpdateInput
    ): Promise<Fungicide | null> {
        return await this.prisma.fungicide.update({
            where: { id },
            include: {
                status: true,
            },
            data,
        });
    }

    async delete(id: number): Promise<Fungicide | null> {
        return await this.prisma.fungicide.delete({ where: { id } });
    }
}
