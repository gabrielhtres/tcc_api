import { Prisma, PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { ScalePartRepository } from '../Repositories/ScalePartRepository';

export class ScalePartController {
	private scalePartRepository: ScalePartRepository;

	constructor() {
		this.scalePartRepository = new ScalePartRepository();
	}

	async getById(req: Request, res: Response) {
		const { id } = req.params;

		const scalePart = await this.scalePartRepository.getById(Number(id));

		return res.status(200).json(scalePart).end();
	}

	async getByScaleId(req: Request, res: Response) {
		const { id } = req.params;

		const scaleParts = await this.scalePartRepository.getByScaleId(
			Number(id),
		);

		return res.status(200).json(scaleParts).end();
	}

	async create(req: Request, res: Response) {
		const { id } = req.params;
		const { name, percentage } = req.body;

		try {
			const scalePart = await this.scalePartRepository.create({
				name,
				percentage: Number(percentage),
				scale: {
					connect: {
						id: Number(id),
					},
				},
			});

			return res.status(201).json(scalePart).end();
		} catch (error) {
			const { code, message } = handleError(
				error as Prisma.PrismaClientKnownRequestError,
			);

			return res.status(code).json({ message }).end();
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const { name, percentage } = req.body;
			const scalePart = await this.scalePartRepository.update(
				Number(id),
				{
					percentage: Number(percentage),
					name,
				},
			);
			return res.status(200).json(scalePart).end();
		} catch (error) {
			const { code, message } = handleError(
				error as Prisma.PrismaClientKnownRequestError,
			);

			return res.status(code).json({ message }).end();
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params;

		try {
			const scalePart = await this.scalePartRepository.delete(Number(id));
			return res.status(200).json(scalePart).end();
		} catch (error) {
			const { code, message } = handleError(
				error as Prisma.PrismaClientKnownRequestError,
			);

			return res.status(code).json({ message }).end();
		}
	}
}
