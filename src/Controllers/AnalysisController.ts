import { Prisma, PrismaClient, User } from '@prisma/client';
import { AnalysisRepository } from '../Repositories/AnalysisRepository';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';

export class AnalysisController {
    private analysisRepository: AnalysisRepository;

    constructor() {
        this.analysisRepository = new AnalysisRepository();
    }

    // async getAll(req: Request, res: Response) {
    //     const users = await this.userRepository.getAll();
    //     return res.send(users).status(200);
    // }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await this.analysisRepository.getById(Number(id));

        return res.send(user).status(200);
    }

    async getByUserId(req: Request, res: Response) {
        const { id } = req.params;
        const analysis = await this.analysisRepository.getByUserId(Number(id));

        return res.send(analysis).status(200);
    }

    async create(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body;

        try {
            const analysis = await this.analysisRepository.create({
                name,
                description,
                user: {
                    connect: {
                        id: Number(id),
                    },
                },
            });

            return res.send(analysis).status(201);
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const analysis = await this.analysisRepository.update(Number(id), {
                name,
                description,
            });
            return res.send(analysis).status(200);
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const analysis = await this.analysisRepository.delete(Number(id));
            return res.send(analysis).status(200);
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }
}
