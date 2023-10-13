import { Prisma, PrismaClient, ScalePart } from '@prisma/client';

export class ScalePartRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async getById(id: number): Promise<ScalePart | null> {
		return await this.prisma.scalePart.findUnique({
			where: { id },
		});
	}

	async getByScaleId(id: number): Promise<ScalePart[] | null> {
		return await this.prisma.scalePart.findMany({
			where: { scaleId: id },
		});
	}

	async create(data: Prisma.ScalePartCreateInput): Promise<ScalePart> {
		return await this.prisma.scalePart.create({ data });
	}

	async update(
		id: number,
		data: Prisma.ScalePartUpdateInput,
	): Promise<ScalePart | null> {
		return await this.prisma.scalePart.update({
			where: { id },
			data,
		});
	}

	async delete(id: number): Promise<ScalePart | null> {
		return await this.prisma.scalePart.delete({ where: { id } });
	}
}
