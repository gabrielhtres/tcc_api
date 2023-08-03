import { Prisma, PrismaClient, Disease } from '@prisma/client';

export class DiseaseController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Disease[]> {
        return this.prisma.disease.findMany();
    }

    async getById(id: number): Promise<Disease | null> {
        return this.prisma.disease.findUnique({ where: { id } });
    }

    async create(data: Prisma.DiseaseCreateInput): Promise<Disease> {
        return this.prisma.disease.create({ data });
    }

    async update(
        id: number,
        data: Prisma.DiseaseUpdateInput
    ): Promise<Disease | null> {
        return this.prisma.disease.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Disease | null> {
        return this.prisma.disease.delete({ where: { id } });
    }
}
