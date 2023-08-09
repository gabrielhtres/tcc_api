import { Prisma, PrismaClient, User } from '@prisma/client';
import { DiseaseRepository } from '../Repositories/DiseaseRepository';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
export class DiseaseController {
    private diseaseRepository: DiseaseRepository;

    constructor() {
        this.diseaseRepository = new DiseaseRepository();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const disease = await this.diseaseRepository.getById(Number(id));

        return res.status(200).json(disease).end();
    }

    async getByAnalysisId(req: Request, res: Response) {
        const { analysisId } = req.params;

        const disease = await this.diseaseRepository.getByPlotId(
            Number(analysisId)
        );

        return res.status(200).json(disease).end();
    }

    async create(req: Request, res: Response) {
        const { analysisId } = req.params;
        const { name, description, statusId } = req.body;

        try {
            const disease = await this.diseaseRepository.create({
                name,
                description,
                user: {
                    connect: {
                        id: Number(analysisId),
                    },
                },
                status: {
                    connect: {
                        id: statusId ? Number(statusId) : 1,
                    },
                },
            });

            return res.status(201).json(disease).end();
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
            const disease = await this.diseaseRepository.update(Number(id), {
                name,
                description,
                status: {
                    connect: {
                        id: Number(statusId),
                    },
                },
            });
            return res.status(200).json(disease).end();
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
            const disease = await this.diseaseRepository.delete(Number(id));
            return res.status(200).json(disease).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
