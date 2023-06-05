import { Request, Response } from 'express';
import UserRepository from '../Repositories/UserRepository';

export class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userRepository.getAll();
            console.log('users', users);

            res.send(users);
        } catch (error) {
            console.log('error get', error);

            res.status(500).json({ message: 'Failed to fetch users' });
        }
    }

    async create(req: Request, res: Response) {
        console.log('req.body', req.body);

        try {
            const userData = req.body;
            const user = await this.userRepository.create(userData);
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
}
