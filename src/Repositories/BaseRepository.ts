import { PrismaClient, Analysis, User } from '@prisma/client';
import { TablesType } from '../Utils/types';
import GlobalPrismaClient from '../Utils/GlobalPrismaClient';

type Model = Analysis | User;

const prisma = new PrismaClient();

class BaseRepository<T extends Model> {
    private table: TablesType;

    constructor(table: TablesType) {
        this.table = table;
    }

    async getAll(): Promise<T[]> {
        const data = await prisma['user'].findMany();
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
