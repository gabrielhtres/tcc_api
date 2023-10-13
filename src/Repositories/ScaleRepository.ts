import { Prisma, PrismaClient, Scale } from '@prisma/client';

export class ScaleRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async getAll(): Promise<Partial<Scale>[]> {
		const scales = await this.prisma.scale.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		return scales;
	}

	async getById(id: number): Promise<Scale | null> {
		return await this.prisma.scale.findUnique({
			where: { id },
		});
	}

	async create(data: Prisma.ScaleCreateInput): Promise<Scale> {
		return await this.prisma.scale.create({ data });
	}

	async update(
		id: number,
		data: Prisma.ScaleUpdateInput,
	): Promise<Scale | null> {
		return await this.prisma.scale.update({
			where: { id },
			data,
		});
	}

	async delete(id: number): Promise<Scale | null> {
		return await this.prisma.scale.delete({ where: { id } });
	}
}
