import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client';

type PrismaModels = 'user' | 'analysis' | 'plot' | 'disease' | 'phase' | 'fungicide' | 'phaseImage' | 'scale' | 'scaleImage' | 'log';

const prisma = new PrismaClient();

// Função genérica que retorna a model correta do Prisma
function getModel<T extends PrismaModels>(modelName: T): Prisma.Client[Extract<T, keyof Prisma.Client>] | null {
    // Verifica se a model existe no PrismaClient
    if (!prisma[modelName]) {
      throw new Error(`Model '${modelName}' não encontrada no PrismaClient.`);
    }
  
    // Verifica se a model possui o método findFirst
    if (typeof prisma[modelName].findFirst !== 'function') {
      throw new Error(`Model '${modelName}' não possui o método 'findFirst'.`);
    }
  
    return prisma[modelName].findFirst();
}

// const GlobalPrismaClient: PrismaModels = {
//     User: prisma.user,
//     Analysis: prisma.analysis,
//     Plot: prisma.plot,
//     Disease: prisma.disease,
//     Phase: prisma.phase,
//     Fungicide: prisma.fungicide,
//     PhaseImage: prisma.phaseImage,
//     Scale: prisma.scale,
//     ScaleImage: prisma.scaleImage,
//     Log: prisma.log,
// }

// export default GlobalPrismaClient;