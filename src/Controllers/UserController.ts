import { Request, Response } from 'express';
import { UserRepository } from '../Repositories/UserRepository';

export class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            // const users = await this.userRepository.getAll();
            res.send('Hello World!');
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    }
}
