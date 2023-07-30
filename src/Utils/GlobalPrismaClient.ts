import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    User: prisma.user,
    Analysis: prisma.analysis,
    Plot: prisma.plot,
    Disease: prisma.disease,
    Phase: prisma.phase,
    Fungicide: prisma.fungicide,
    PhaseImage: prisma.phaseImage,
    Scale: prisma.scale,
    ScaleImage: prisma.scaleImage,
    Log: prisma.log,
};
