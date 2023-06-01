import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const table = 'user';

export class UserRepository {
    async getAll(): Promise<User[]> {
        const users = await prisma[table].findMany();
        return users;
    }

    async getById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { id } });
        return user;
    }

    async create(userData: User): Promise<User> {
        console.log('userData', userData);

        const user = await prisma.user.findFirst({
            where: { email: userData.email, cpf: userData.cpf },
        });

        if (!user) {
            const userCreated = await prisma.user.create({
                data: userData,
            });

            return userCreated;
        }

        return user;
    }

    async update(id: number, userData: Partial<User>): Promise<User | null> {
        const user = await prisma.user.update({
            where: { id },
            data: userData,
        });
        return user;
    }

    async delete(id: number): Promise<User | null> {
        const user = await prisma.user.delete({ where: { id } });
        return user;
    }
}
