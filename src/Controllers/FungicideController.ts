import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { FungicideRepository } from '../Repositories/FungicideRepository';
import { DefaultFungicideRepository } from '../Repositories/DefaultFungicideRepository';

export class FungicideController {
    private fungicideRepository: FungicideRepository;
    private defaultFungicideRepository: DefaultFungicideRepository;

    constructor() {
        this.fungicideRepository = new FungicideRepository();
        this.defaultFungicideRepository = new DefaultFungicideRepository();
    }

    async getSelectList(req: Request, res: Response) {
        const { id } = req.params;

        const fungicides =
            await this.defaultFungicideRepository.getByDefaultDiseaseId(
                Number(id)
            );

        return res.status(200).json(fungicides).end();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const fungicide = await this.defaultFungicideRepository.getById(
            Number(id)
        );

        return res.status(200).json(fungicide).end();
    }

    async getByDiseaseId(req: Request, res: Response) {
        const { id } = req.params;

        const fungicide = await this.fungicideRepository.getByDiseaseId(
            Number(id)
        );

        return res.status(200).json(fungicide).end();
    }

    async create(req: Request, res: Response) {
        const { id } = req.params;
        const { defaultFungicideId, statusId } = req.body;

        try {
            const fungicide = await this.fungicideRepository.create({
                disease: {
                    connect: {
                        id: Number(id),
                    },
                },
                defaultFungicide: {
                    connect: {
                        id: Number(defaultFungicideId),
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

            return res.status(201).json(fungicide).end();
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
            const { statusId, defaultFungicideId } = req.body;

            const fungicide = await this.fungicideRepository.update(
                Number(id),
                {
                    defaultFungicide: {
                        connect: {
                            id: Number(defaultFungicideId),
                        },
                    },
                    status: {
                        connect: {
                            id: Number(statusId),
                        },
                    },
                }
            );
            return res.status(200).json(fungicide).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
