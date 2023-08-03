import { Prisma, PrismaClient, Scale } from '@prisma/client';

export class ScaleController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Scale[]> {
        return this.prisma.scale.findMany();
    }

    async getById(id: number): Promise<Scale | null> {
        return this.prisma.scale.findUnique({ where: { id } });
    }

    async create(data: Prisma.ScaleCreateInput): Promise<Scale> {
        return this.prisma.scale.create({ data });
    }

    async update(
        id: number,
        data: Prisma.ScaleUpdateInput
    ): Promise<Scale | null> {
        return this.prisma.scale.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Scale | null> {
        return this.prisma.scale.delete({ where: { id } });
    }
}
