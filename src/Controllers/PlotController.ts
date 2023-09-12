import { Prisma, PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { PlotRepository } from '../Repositories/PlotRepositoy';
export class PlotController {
    private plotRepository: PlotRepository;

    constructor() {
        this.plotRepository = new PlotRepository();
    }

    // async getAll(req: Request, res: Response) {
    //     const users = await this.userRepository.getAll();
    //     return res.send(users).status(200);
    // }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const plot = await this.plotRepository.getById(Number(id));

        return res.status(200).json(plot).end();
    }

    async getByAnalysisId(req: Request, res: Response) {
        const { id } = req.params;

        const plot = await this.plotRepository.getByAnalysisId(Number(id));

        return res.status(200).json(plot).end();
    }

    async create(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description, xCoordinate, yCoordinate, statusId } =
            req.body;

        try {
            const plot = await this.plotRepository.create({
                name,
                description,
                xCoordinate,
                yCoordinate,
                analysis: {
                    connect: {
                        id: Number(id),
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

            return res.status(201).json(plot).end();
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
            const { name, description, xCoordinate, yCoordinate, statusId } =
                req.body;
            const plot = await this.plotRepository.update(Number(id), {
                name,
                description,
                xCoordinate,
                yCoordinate,
                status: {
                    connect: {
                        id: Number(statusId),
                    },
                },
            });
            return res.status(200).json(plot).end();
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
            const plot = await this.plotRepository.delete(Number(id));
            return res.status(200).json(plot).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
