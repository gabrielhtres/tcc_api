import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithToken } from '../Utils/types';

function authUser(
    req: RequestWithToken & { userId?: string },
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization;

    console.log('token', token);

    if (!token) {
        // next();
        return res.status(401).json({ message: 'Token JWT ausente' }).end();
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'gR33nV1S10n');

        if (typeof decoded === 'string') {
            throw new Error('decoded não pode ser string');
        }

        if (typeof decoded !== 'string') {
            req.userId = decoded.userId;
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: error }).end();
    }
}

export default authUser;
