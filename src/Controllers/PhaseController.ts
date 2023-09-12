import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { PhaseRepository } from '../Repositories/PhaseRepository';
export class PhaseController {
    private phaseRepository: PhaseRepository;

    constructor() {
        this.phaseRepository = new PhaseRepository();
    }

    // async getAll(req: Request, res: Response) {
    //     const users = await this.userRepository.getAll();
    //     return res.send(users).status(200);
    // }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const phase = await this.phaseRepository.getById(Number(id));

        return res.status(200).json(phase).end();
    }

    async getByPlotId(req: Request, res: Response) {
        const { id } = req.params;

        const phase = await this.phaseRepository.getByPlotId(Number(id));

        return res.status(200).json(phase).end();
    }

    async create(req: Request, res: Response) {
        const { id } = req.params;
        const { name, hasIncidence, percentage, meteorology, statusId } =
            req.body;

        try {
            const phase = await this.phaseRepository.create({
                name,
                hasIncidence,
                percentage,
                meteorology,
                plot: {
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

            return res.status(201).json(phase).end();
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
            const { name, hasIncidence, percentage, meteorology, statusId } =
                req.body;
            const phase = await this.phaseRepository.update(Number(id), {
                name,
                hasIncidence,
                percentage,
                meteorology,
                status: {
                    connect: {
                        id: Number(statusId),
                    },
                },
            });
            return res.status(200).json(phase).end();
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
            const phase = await this.phaseRepository.delete(Number(id));
            return res.status(200).json(phase).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
