import { Prisma, PrismaClient, User } from '@prisma/client';

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getUserToLogin(
        email: string,
        password: string
    ): Promise<Partial<User> | null> {
        return this.prisma.user.findFirst({
            where: {
                email,
                password,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
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
