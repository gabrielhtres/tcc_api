import { NextFunction, Request, Response } from 'express';
import UserRepository from '../Repositories/UserRepository';
import jwt from 'jsonwebtoken';
import { RedisClient } from 'ioredis/built/connectors/SentinelConnector/types';
import ioredis from 'ioredis';
import { RequestLogin, RequestWithToken } from '../Utils/types';

export class UserController {
    private userRepository: UserRepository;
    private redis: ioredis;

    constructor() {
        this.userRepository = new UserRepository();
        this.redis = new ioredis();
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userRepository.getAll();

            res.send(users);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const userData = req.body;
            const user = await this.userRepository.create(userData);

            res.json({ message: 'User created' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user', error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userData = req.body;
            const user = await this.userRepository.update(Number(id), userData);
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Failed to update user' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await this.userRepository.login(email, password);

            jwt.sign(
                { userId: user?.id },
                'gR33nV1S10n',
                { expiresIn: '5m' },
                (err: any, token: any) => {
                    if (err) {
                        return res.status(500).json({ message: err });
                    }

                    res.json({ token });
                }
            );
        } catch (error) {
            res.status(500).json({
                message: 'Esse usuário não existe no cadastro',
            });
        }
    }

    async authUser(req: RequestLogin, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        try {
            const decoded = jwt.verify(token.split(' ')[1], 'gR33nV1S10n');

            console.log('decoded', decoded);

            if (typeof decoded === 'string') {
                throw new Error('decoded não pode ser string');
            }

            if (typeof decoded !== 'string') {
                const redisToken = await this.redis.get(`token-${token}`);

                console.log('redisToken', redisToken);

                if (redisToken) {
                    return res
                        .status(401)
                        .json({ message: 'O usuário desse token já deslogou' })
                        .end();
                }

                req.userId = decoded.userId;
                next();
            }
        } catch (error) {
            return res.status(401).json({ message: error }).end();
        }
    }
}
