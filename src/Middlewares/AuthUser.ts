import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithToken } from '../Utils/types';

async function authUser(
    req: RequestWithToken & { userId: string },
    res: Response,
    next: NextFunction
) {
    const { token } = req;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    jwt.verify(token, 'gR33nV1S10n', (err: any, decoded: any) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to login' });
        }

        req.userId = decoded.userId;
    });

    next();
}

export default authUser;
