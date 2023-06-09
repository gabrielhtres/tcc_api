// import { PrismaClient, Analysis } from '@prisma/client';

// const prisma = new PrismaClient();

// class AnalysisRepository {
//     async getAll(): Promise<Analysis[]> {
//         const analyzes = await prisma.analysis.findMany();
//         return analyzes;
//     }

//     async getById(id: number): Promise<Analysis | null> {
//         const user = await prisma.analysis.findUnique({ where: { id } });
//         return user;
//     }

//     async create(userData: Analysis): Promise<Analysis> {
//         const user = await prisma.analysis.findFirst({
//             where: { email: userData.email, cpf: userData.cpf },
//         });

//         if (!user) {
//             const userCreated = await prisma.analysis.create({
//                 data: userData,
//             });

//             return userCreated;
//         }

//         return user;
//     }

//     async update(id: number, userData: Partial<User>): Promise<User | null> {
//         const user = await prisma.analysis.update({
//             where: { id },
//             data: userData,
//         });
//         return user;
//     }

//     async delete(id: number): Promise<User | null> {
//         const user = await prisma.analysis.delete({ where: { id } });
//         return user;
//     }
// }

// export default AnalysisRepository;
