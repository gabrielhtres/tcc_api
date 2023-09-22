import { PrismaClient, DefaultFungicide } from '@prisma/client';

export class DefaultFungicideRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Partial<DefaultFungicide>[]> {
        const fungicides = await this.prisma.defaultDisease.findMany({
            // select: {
            //     id: true,
            //     scientificName: true,
            //     commonNames: true,
            // },
        });

        return fungicides;
    }

    async getByDefaultDiseaseId(
        id: number
    ): Promise<DefaultFungicide[] | null> {
        return await this.prisma.defaultFungicide.findMany({
            where: { defaultDiseases: { some: { id } } },
        });
    }

    async getById(id: number): Promise<DefaultFungicide | null> {
        return await this.prisma.defaultFungicide.findUnique({
            where: { id },
        });
    }
}
