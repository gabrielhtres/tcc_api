import { Prisma, PrismaClient, ScaleImage } from '@prisma/client';

export class ScaleImageController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<ScaleImage[]> {
        return this.prisma.scaleImage.findMany();
    }

    async getById(id: number): Promise<ScaleImage | null> {
        return this.prisma.scaleImage.findUnique({ where: { id } });
    }

    async create(data: Prisma.ScaleImageCreateInput): Promise<ScaleImage> {
        return this.prisma.scaleImage.create({ data });
    }

    async update(
        id: number,
        data: Prisma.ScaleImageUpdateInput
    ): Promise<ScaleImage | null> {
        return this.prisma.scaleImage.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<ScaleImage | null> {
        return this.prisma.scaleImage.delete({ where: { id } });
    }
}
