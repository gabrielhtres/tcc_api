import { PrismaClient, DefaultDisease } from '@prisma/client';

export class DefaultDiseaseRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Partial<DefaultDisease>[]> {
        const diseases = await this.prisma.defaultDisease.findMany({
            select: {
                id: true,
                scientificName: true,
                commonNames: true,
            },
        });
        return diseases;
    }

    async getById(id: number): Promise<DefaultDisease | null> {
        return await this.prisma.defaultDisease.findUnique({
            where: { id },
            include: {
                fungicides: {
                    select: {
                        id: true,
                        tradeMark: true,
                    },
                },
            },
        });
    }
}
