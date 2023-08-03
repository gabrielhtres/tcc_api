import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import { RequestLogin, RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';

const router = express.Router();
// const redis = new ioredis();
const userController = new UserController();

// router.post('/signin', userController.login.bind(userController));

router.post('/signup', userController.create.bind(userController));

// router.use(userController.authUser.bind(userController));

router.get('/', (req: RequestWithToken, res: Response) => {
    res.send('API GreenVision');
});

router.post('/logout', (req: RequestLogin, res: Response) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token JWT ausente' }).end();
    }

    return res.status(200).json({ message: 'Logout successfully' }).end();
});

router.use('/user', userRoutes);

export default router;
