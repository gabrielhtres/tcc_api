import { Prisma, PrismaClient, User } from '@prisma/client';
import { AnalysisRepository } from '../Repositories/AnalysisRepository';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';

export class AnalysisController {
    private analysisRepository: AnalysisRepository;

    constructor() {
        this.analysisRepository = new AnalysisRepository();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const analysis = await this.analysisRepository.getById(Number(id));

        return res.status(200).json(analysis).end();
    }

    async getByUserId(req: Request, res: Response) {
        const { userId } = req.params;

        const analysis = await this.analysisRepository.getByUserId(
            Number(userId)
        );

        return res.status(200).json(analysis).end();
    }

    async create(req: Request, res: Response) {
        const { userId } = req.params;
        const { name, description, statusId } = req.body;

        try {
            const analysis = await this.analysisRepository.create({
                name,
                description,
                user: {
                    connect: {
                        id: Number(userId),
                    },
                },
                status: statusId
                    ? {
                          connect: {
                              id: Number(statusId),
                          },
                      }
                    : undefined,
            });

            return res.status(201).json(analysis).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description, statusId } = req.body;
            const analysis = await this.analysisRepository.update(Number(id), {
                name,
                description,
                status: {
                    connect: {
                        id: Number(statusId),
                    },
                },
            });
            return res.status(200).json(analysis).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const analysis = await this.analysisRepository.delete(Number(id));
            return res.status(200).json(analysis).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
