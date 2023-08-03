import { Prisma, PrismaClient, User } from '@prisma/client';
import { UserRepository } from '../Repositories/UserRepository';
import { Request, Response } from 'express';
export class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    getAll(req: Request, res: Response) {
        const users = this.userRepository.getAll();
        return res.send(users).status(200);
    }

    getById(req: Request, res: Response) {
        const { id } = req.params;
        const user = this.userRepository.getById(Number(id));
        return res.send(user).status(200);
    }

    async create(req: Request, res: Response) {
        const { name, cpf, email, phone, password } = req.body;
        const user = await this.userRepository.create({
            name,
            cpf,
            email,
            phone,
            password,
        });
        console.log(user);

        return res.send(user).status(201);
    }

    update(req: Request, res: Response) {
        const { id } = req.params;
        const user = this.userRepository.update(Number(id), {
            ...req.body,
        });
        return res.send(user).status(200);
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;
        const user = this.userRepository.delete(Number(id));
        return res.send(user).status(200);
    }
}
