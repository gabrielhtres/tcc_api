import {
    PrismaClient,
    DefaultDisease,
    Prisma,
    DefaultFungicide,
} from '@prisma/client';
import { promises as fsPromises } from 'fs';
const prisma = new PrismaClient();

interface DefaultDiseaseInsertType
    extends Omit<Prisma.DefaultDiseaseCreateInput, 'fungicides'> {
    fungicides?: { id: number }[];
}

async function main() {
    const fungicidesJson = await fsPromises.readFile(
        './seeds/fungicide.json',
        'utf-8'
    );
    const fungicidesData = JSON.parse(fungicidesJson);

    const diseasesJson = await fsPromises.readFile(
        './seeds/disease.json',
        'utf-8'
    );
    const diseasesData = JSON.parse(diseasesJson);

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

    try {
        for (const fungicide of fungicidesData) {
            const insertFungicide = await prisma.defaultFungicide.upsert({
                create: fungicide,
                update: fungicide,
                where: { id: fungicide.id },
            });

            console.log(insertFungicide);
        }
    } catch (e) {
        console.error(e);
    }

    for (const disease of diseasesData) {
        const connectFungicides = disease.fungicides
            .map((fung: DefaultFungicide) => ({
                id: fung.id,
            }))
            .filter((fung: DefaultFungicide) => {
                const found = fungicidesData.find(
                    (f: DefaultFungicide) => f.id === fung.id
                );

                return !!found;
            });

        const { fungicides, ...diseaseData } = disease;

        const upsertedDisease = await prisma.defaultDisease.upsert({
            where: { id: disease.id },
            create: {
                ...diseaseData,
                fungicides: {
                    connect: connectFungicides,
                },
            },
            update: {
                ...diseaseData,
                fungicides: {
                    connect: connectFungicides,
                },
            },
            include: {
                fungicides: true,
            },
        });

        console.log(upsertedDisease.id);
    }

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
