import { Prisma, PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import { ScaleRepository } from '../Repositories/ScaleRepository';
export class ScaleController {
	private scaleRepository: ScaleRepository;

	constructor() {
		this.scaleRepository = new ScaleRepository();
	}

	async getAll(req: Request, res: Response) {
		const scales = await this.scaleRepository.getAll();

		return res.status(200).json(scales).end();
	}

	async getById(req: Request, res: Response) {
		const { id } = req.params;

		const scale = await this.scaleRepository.getById(Number(id));

		return res.status(200).json(scale).end();
	}

	async create(req: Request, res: Response) {
		const { name, description } = req.body;

		try {
			const scale = await this.scaleRepository.create({
				name,
				description,
			});

			return res.status(201).json(scale).end();
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
			const { name, description } = req.body;
			const scale = await this.scaleRepository.update(Number(id), {
				name,
				description,
			});
			return res.status(200).json(scale).end();
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
			const scale = await this.scaleRepository.delete(Number(id));
			return res.status(200).json(scale).end();
		} catch (error) {
			const { code, message } = handleError(
				error as Prisma.PrismaClientKnownRequestError,
			);

			return res.status(code).json({ message }).end();
		}
	}
}
