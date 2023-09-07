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

    async validateToken(req: Request, res: Response) {
        const { userId } = req.params;

        if (!userId) {
            return res.status(401).json({ message: 'Token JWT inválido' }).end();
        }

        return res.status(200).json({ message: 'Token válido' }).end();
            
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Dados inválidos para o Login' })
                .end();
        }

        const user = await this.userRepository.getUserToLogin(email, password);

        if (!user || !user.id) {
            return res
                .status(401)
                .json({ message: 'Usuário não encontrado' })
                .end();
        }

        const token = jwt.sign(user, process.env.JWT_SECRET as string, {
            expiresIn: '1h',
        });

        const refreshToken = jwt.sign(
            { refreshKey: process.env.JWT_REFRESH_KEY },
            process.env.JWT_SECRET as string,
            {
                expiresIn: '1h',
            }
        );

        await this.userRepository.update(user.id, { refreshToken });

        const { id, name, cpf, phone, email: userEmail } = user;

        return res
            .status(200)
            .json({
                id,
                name,
                cpf,
                phone,
                email: userEmail,
                token,
                refreshToken,
            })
            .end();
    }

    async refresh(req: Request, res: Response) {
        const refreshToken = req.headers.authorization?.split(' ')[1];

        if (!refreshToken) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        try {
            const decoded = jwt.verify(
                refreshToken,
                process.env.JWT_SECRET as string
            ) as { refreshKey: string };

            if (decoded.refreshKey !== process.env.JWT_REFRESH_KEY) {
                return res
                    .status(401)
                    .json({ message: 'Token JWT inválido' })
                    .end();
            }

            const user = await this.userRepository.getUserToRefresh(
                refreshToken
            );

            if (!user || !user.id) {
                return res
                    .status(401)
                    .json({ message: 'Token JWT inválido' })
                    .end();
            }

            const newToken = jwt.sign(user, process.env.JWT_SECRET as string, {
                expiresIn: '1h',
            });

            const newRefreshToken = jwt.sign(
                { refreshKey: process.env.JWT_REFRESH_KEY },
                process.env.JWT_SECRET as string,
                {
                    expiresIn: '1h',
                }
            );

            await this.userRepository.update(user.id, {
                refreshToken: newRefreshToken,
            });

            const { id, name, cpf, phone, email: userEmail } = user;

            return res
                .status(200)
                .json({
                    id,
                    name,
                    cpf,
                    phone,
                    email: userEmail,
                    token: newToken,
                    refreshToken: newRefreshToken,
                })
                .end();
        } catch (error) {
            console.log(error);

            return res
                .status(401)
                .json({ message: 'Token JWT inválido' })
                .end();
        }
    }

    async logout(req: Request, res: Response) {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        const isLogout = await redis.get(token);

        if (isLogout) {
            return res
                .status(401)
                .json({ message: 'Esse usuário já está deslogado' })
                .end();
        }

        try {
            redis.set(token, 'logout', { EX: 3600 });
        } catch (error) {
            return res.status(401).json({ message: 'Erro no Redis' }).end();
        }

        return res.status(200).json({ message: 'Usuário deslogado' }).end();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await this.userRepository.getById(Number(id));

        return res.status(200).json(user).end();
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

            return res.status(201).json(user).end();
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
            const { name, cpf, email, phone, password } = req.body;
            const user = await this.userRepository.update(Number(id), {
                name,
                cpf,
                email,
                phone,
                password,
            });
            return res.status(200).json(user).end();
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
            const user = await this.userRepository.delete(Number(id));
            return res.status(200).json(user).end();
        } catch (error) {
            const { code, message } = handleError(
                error as Prisma.PrismaClientKnownRequestError
            );

            return res.status(code).json({ message }).end();
        }
    }
}
