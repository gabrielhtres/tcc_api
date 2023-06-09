import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserRepository from '../Repositories/UserRepository';
import { RequestLoginWithToken } from '../Utils/types';

async function loginUser(
    req: RequestLoginWithToken,
    res: Response,
    next: NextFunction
) {
    const userRepository = new UserRepository();
    const { email, password } = req.body;

    const user = await userRepository.login(email, password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    jwt.sign({ userId: user.id }, 'gR33nV1S10n', (err: any, token: any) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to login' });
        }

        req.token = token;

        next();
    });
}

export default loginUser;
