import { Request, Response } from 'express';
import { UserRepository } from '../Repositories/UserRepository';

export class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userRepository.getAll();
            res.send('Hello World!');
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const userData = req.body;
            const user = await this.userRepository.create(userData);
            res.json(user).status(201);
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
