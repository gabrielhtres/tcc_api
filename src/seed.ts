import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const inProgress = await prisma.status.upsert({
        create: {
            id: 1,
            name: 'Em andamento',
        },
        update: {},
        where: { id: 1 },
    });
    const canceled = await prisma.status.upsert({
        create: {
            id: 2,
            name: 'Cancelado',
        },
        update: {},
        where: { id: 2 },
    });
    const finished = await prisma.status.upsert({
        create: {
            id: 3,
            name: 'Finalizado',
        },
        update: {},
        where: { id: 3 },
    });
    console.log({ inProgress, canceled, finished });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
