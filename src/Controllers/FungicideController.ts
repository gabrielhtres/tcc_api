import { Prisma, PrismaClient, Fungicide } from '@prisma/client';

export class FungicideController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Fungicide[]> {
        return this.prisma.fungicide.findMany();
    }

    async getById(id: number): Promise<Fungicide | null> {
        return this.prisma.fungicide.findUnique({ where: { id } });
    }

    async create(data: Prisma.FungicideCreateInput): Promise<Fungicide> {
        return this.prisma.fungicide.create({ data });
    }

    async update(
        id: number,
        data: Prisma.FungicideUpdateInput
    ): Promise<Fungicide | null> {
        return this.prisma.fungicide.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Fungicide | null> {
        return this.prisma.fungicide.delete({ where: { id } });
    }
}
