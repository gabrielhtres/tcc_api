import { PrismaClient, Analysis } from '@prisma/client';

const prisma = new PrismaClient();

type PrismaModel<Model extends 'User' | 'Analysis'> = Model;

class BaseRepository {
    private table: string;

    constructor(table: string, type: ) {
        this.table = table;
    }

    async getAll(): Promise<PrismaModel<'Analysis'>[]> {
        const analyzes = await prisma.analysis.findMany();
        return analyzes;
    }

    async getById(id: number): Promise<T | null> {
        const user = await prisma.analysis.findUnique({ where: { id } });
        return user;
    }

    async create(userData: Analysis): Promise<T> {
        const user = await prisma.analysis.findFirst({
            where: { email: userData.email, cpf: userData.cpf },
        });

        if (!user) {
            const userCreated = await prisma.analysis.create({
                data: userData,
            });

            return userCreated;
        }

        return user;
    }

    async update(id: number, userData: Partial<T>): Promise<T | null> {
        const user = await prisma.analysis.update({
            where: { id },
            data: userData,
        });
        return user;
    }

    async delete(id: number): Promise<User | null> {
        const user = await prisma.analysis.delete({ where: { id } });
        return user;
    }
}

export default AnalysisRepository;
