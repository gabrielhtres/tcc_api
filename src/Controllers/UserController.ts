import { Prisma, PrismaClient, User } from '@prisma/client';

export class UserController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async getById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data });
    }

    async update(
        id: number,
        data: Prisma.UserUpdateInput
    ): Promise<User | null> {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<User | null> {
        return this.prisma.user.delete({ where: { id } });
    }
}
