import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import jwt from 'jsonwebtoken';
import { RequestWithToken } from '../Utils/types';
import loginUser from '../Middlewares/LoginUser';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

userRoutes.post(
    '/signup',
    loginUser,
    (req: RequestWithToken, res: Response) => {
        const { token } = req;
        console.log('token', token);

        if (token) res.status(200).send({ token });

        res.status(401).end();
    }
);

router.use('/user', userRoutes);

export default router;
