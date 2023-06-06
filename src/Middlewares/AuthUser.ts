import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithToken } from '../Utils/types';

async function authUser(
    req: RequestWithToken & { userId?: string },
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('veio aqui\n\n');

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' }).end();
    }

    jwt.verify(token, 'gR33nV1S10n', (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Not authorized' }).end();
        }

        req.userId = decoded.userId;
    });

    next();
}

export default authUser;
