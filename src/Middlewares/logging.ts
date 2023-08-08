import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const logging = async (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', async () => {
        const { statusCode } = res;
        const {
            params: { userId },
            method,
            originalUrl,
            body,
        } = req;
        const payload = JSON.stringify(body || {});

        await prisma.log.create({
            data: {
                method,
                statusCode,
                payload,
                route: originalUrl,
                user: {
                    connect: {
                        id: Number(userId),
                    },
                },
            },
        });
    });

    next();
};

export default logging;
