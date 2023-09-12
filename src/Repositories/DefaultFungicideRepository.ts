import { PrismaClient, DefaultFungicide } from '@prisma/client';

export class DefaultFungicideRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getById(id: number): Promise<DefaultFungicide | null> {
        return await this.prisma.defaultFungicide.findUnique({
            where: { id },
        });
    }
}
