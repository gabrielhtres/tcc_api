import { Prisma, PrismaClient, User } from '@prisma/client';

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getUserToLogin(
        email: string,
        password: string
    ): Promise<Partial<User>> {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password,
            },
        });

        return { id: user?.id, name: user?.name, email: user?.email };
    }

    async getAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async getById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await this.prisma.user.create({ data });
        return user;
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
