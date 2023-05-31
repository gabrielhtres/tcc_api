import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
    // async getAll(): Promise<User[]> {
    //     const users = await prisma.user.findMany();
    //     return users;
    // }
    // async getById(id: number): Promise<User | null> {
    //     const user = await prisma.user.findUnique({ where: { id } });
    //     return user;
    // }
    // async create(userData: Partial<User>): Promise<User> {
    //     const user = await prisma.user.create({ data: userData });
    //     return user;
    // }
    // async update(id: number, userData: Partial<User>): Promise<User | null> {
    //     const user = await prisma.user.update({
    //         where: { id },
    //         data: userData,
    //     });
    //     return user;
    // }
    // async delete(id: number): Promise<User | null> {
    //     const user = await prisma.user.delete({ where: { id } });
    //     return user;
    // }
}
