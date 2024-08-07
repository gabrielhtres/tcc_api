import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import redis from '../Config/Redis';

async function authUser(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if (!decoded || typeof decoded === 'string') {
            return res
                .status(401)
                .json({ message: 'Token JWT inválido' })
                .end();
        }

        const isLogout = await redis.get(token);

        if (isLogout) {
            return res
                .status(401)
                .json({ message: 'Esse usuário já está deslogado' })
                .end();
        }

        req.params.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Token JWT inválido' }).end();
    }
}

export default authUser;
