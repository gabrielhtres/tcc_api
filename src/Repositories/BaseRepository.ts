import { PrismaClient, Analysis, User, Prisma } from '@prisma/client';
import { TablesType } from '../Utils/types';
import GlobalPrismaClient from '../Utils/GlobalPrismaClient';

type Model = Analysis | User;

class BaseRepository<T> {
    private table: TablesType;

    constructor(table: TablesType) {
        this.table = table;
    }

    async getAll<Model>(): Promise<T[]> {
        const data = await GlobalPrismaClient[this.table].findMany();
        return data;
    }

    async getById(id: number): Promise<T> {
        const data = await prisma[this.table].findUnique({ where: { id } });
        return data;
    }

    async create(createData: T): Promise<T> {
        const data = await prisma.user.findFirst({
            where: { ...createData },
        });

        if (!data) {
            const created = await prisma[this.table].create({
                data: createData,
            });

            return created;
        }

        return data;
    }

    async update(id: number, updateData: Partial<T>): Promise<T | null> {
        const data = await prisma[this.table].update({
            where: { id },
            data: updateData,
        });
        return data;
    }

    async delete(id: number): Promise<User | null> {
        const data = await prisma[this.table].delete({ where: { id } });
        return data;
    }
}

export default BaseRepository;
