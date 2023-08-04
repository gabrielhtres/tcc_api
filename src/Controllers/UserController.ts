import { Prisma, PrismaClient, User } from '@prisma/client';
import { UserRepository } from '../Repositories/UserRepository';
import { Request, Response } from 'express';
import handleError from '../Utils/handleError';
import jwt from 'jsonwebtoken';
import redis from '../Config/Redis';
export class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    // async getAll(req: Request, res: Response) {
    //     const users = await this.userRepository.getAll();
    //     return res.send(users).status(200);
    // }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await this.userRepository.getUserToLogin(email, password);

        if (!user.id) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        const token = jwt.sign(user, process.env.JWT_SECRET as string, {
            expiresIn: '1h',
        });

        return res.send({ token }).status(200);
    }

    async logout(req: Request, res: Response) {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        try {
            const redisClient = await redis.connect();
            // const reply = await redisClient.set(token, 'logout');
            // console.log(reply);
        } catch (e) {
            console.log(e);
        }

        return res.status(200).json({ message: 'Usuário deslogado' }).end();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await this.userRepository.getById(Number(id));

        return res.send(user).status(200);
    }

    async create(req: Request, res: Response) {
        const { name, cpf, email, phone, password } = req.body;

        try {
            const user = await this.userRepository.create({
                name,
                cpf,
                email,
                phone,
                password,
            });

            return res.send(user).status(201);
        } catch (e) {
            const { code, message } = handleError(
                e as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, cpf, email, phone, password } = req.body;
            const user = await this.userRepository.update(Number(id), {
                name,
                cpf,
                email,
                phone,
                password,
            });
            return res.send(user).status(200);
        } catch (e) {
            const { code, message } = handleError(
                e as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const user = await this.userRepository.delete(Number(id));
            return res.send(user).status(200);
        } catch (e) {
            const { code, message } = handleError(
                e as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message });
        }
    }
}
