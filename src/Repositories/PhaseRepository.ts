import { Prisma, PrismaClient, Phase } from '@prisma/client';

export class PhaseRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // async getAll(): Promise<User[]> {
    //     const users = await this.prisma.user.findMany();
    //     return users;
    // }

    async getById(id: number): Promise<Phase | null> {
        return await this.prisma.phase.findUnique({
            where: { id },
            include: {
                status: true,
            },
        });
    }

    async getByPlotId(id: number): Promise<Partial<Phase>[] | null> {
        return await this.prisma.phase.findMany({
            where: { plotId: id },
            select: {
                id: true,
                name: true,
                statusId: true,
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
    }

    async create(data: Prisma.PhaseCreateInput): Promise<Phase> {
        return await this.prisma.phase.create({ data });
    }

    async update(
        id: number,
        data: Prisma.PhaseUpdateInput
    ): Promise<Phase | null> {
        return await this.prisma.phase.update({
            where: { id },
            include: {
                status: true,
            },
            data,
        });
    }

    async delete(id: number): Promise<Phase | null> {
        return await this.prisma.phase.delete({ where: { id } });
    }
}
