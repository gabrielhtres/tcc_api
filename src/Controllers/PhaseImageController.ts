import { Prisma, PrismaClient, PhaseImage } from '@prisma/client';

export class PhaseImageController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<PhaseImage[]> {
        return this.prisma.phaseImage.findMany();
    }

    async getById(id: number): Promise<PhaseImage | null> {
        return this.prisma.phaseImage.findUnique({ where: { id } });
    }

    async create(data: Prisma.PhaseImageCreateInput): Promise<PhaseImage> {
        return this.prisma.phaseImage.create({ data });
    }

    async update(
        id: number,
        data: Prisma.PhaseImageUpdateInput
    ): Promise<PhaseImage | null> {
        return this.prisma.phaseImage.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<PhaseImage | null> {
        return this.prisma.phaseImage.delete({ where: { id } });
    }
}
