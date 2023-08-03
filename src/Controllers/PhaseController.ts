import { Prisma, PrismaClient, Phase } from '@prisma/client';

export class PhaseController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Phase[]> {
        return this.prisma.phase.findMany();
    }

    async getById(id: number): Promise<Phase | null> {
        return this.prisma.phase.findUnique({ where: { id } });
    }

    async create(data: Prisma.PhaseCreateInput): Promise<Phase> {
        return this.prisma.phase.create({ data });
    }

    async update(
        id: number,
        data: Prisma.PhaseUpdateInput
    ): Promise<Phase | null> {
        return this.prisma.phase.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Phase | null> {
        return this.prisma.phase.delete({ where: { id } });
    }
}
