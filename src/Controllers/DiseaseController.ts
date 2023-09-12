import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { DiseaseRepository } from '../Repositories/DiseaseRepository';
import { DefaultDiseaseRepository } from '../Repositories/DefaultDiseaseRepository';
export class DiseaseController {
    private diseaseRepository: DiseaseRepository;
    private defaultDiseaseRepository: DefaultDiseaseRepository;

    constructor() {
        this.diseaseRepository = new DiseaseRepository();
        this.defaultDiseaseRepository = new DefaultDiseaseRepository();
    }

    // async getAll(req: Request, res: Response) {
    //     const users = await this.userRepository.getAll();
    //     return res.send(users).status(200);
    // }

    async getSelectList(req: Request, res: Response) {
        const diseases = await this.defaultDiseaseRepository.getAll();

        return res.status(200).json(diseases).end();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const disease = await this.diseaseRepository.getById(Number(id));

        return res.status(200).json(disease).end();
    }

    async getByPhaseId(req: Request, res: Response) {
        const { id } = req.params;

        const disease = await this.diseaseRepository.getByPhaseId(Number(id));

        return res.status(200).json(disease).end();
    }

    async create(req: Request, res: Response) {
        const { id } = req.params;
        const { name, statusId, defaultDiseaseId } = req.body;

        try {
            const disease = await this.diseaseRepository.create({
                name,
                phase: {
                    connect: {
                        id: Number(id),
                    },
                },
                defaultDisease: {
                    connect: {
                        id: Number(defaultDiseaseId),
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
            const { name, statusId, defaultDiseaseId } = req.body;
            const disease = await this.diseaseRepository.update(Number(id), {
                name,
                defaultDisease: {
                    connect: {
                        id: Number(defaultDiseaseId),
                    },
                },
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
