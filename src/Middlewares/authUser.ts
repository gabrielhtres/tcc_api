import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function authUser(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token JWT ausente' }).end();
        }

        jwt.verify(token, process.env.JWT_SECRET as string);

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Token JWT inválido' }).end();
    }
}

export default authUser;
