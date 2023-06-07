import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import { RequestLogin, RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';
import ioredis from 'ioredis';
import authUser from '../Middlewares/AuthUser';

const router = express.Router();
const redis = new ioredis();
const userController = new UserController();

router.post('/signup', userController.create.bind(userController));

router.post('/signin', userController.login.bind(userController));

router.use(userController.authUser.bind(userController));

// router.post(
//     '/signin',
//     loginUser,
//     (req: RequestLoginWithToken, res: Response) => {
//         const { token } = req;
//         console.log('token', token);

//         if (token) res.status(200).send({ token });

//         res.status(401).end();
//     }
// );

router.get('/', (req: RequestWithToken, res: Response) => {
    res.send('deu boa o teste');
});

router.post('/logout', (req: RequestLogin, res: Response) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token JWT ausente' }).end();
    }

    redis.set(`token-${req.userId}`, token, 'EX', 600);

    redis.get(`token-${req.userId}`, (err, reply) => {
        if (err) {
            console.log(err);
            // return res.status(500).end();
        }

        console.log('reply', reply);
    });

    redis.quit();

    return res.status(200).json({ message: 'Logout successfully' }).end();
});

router.use('/user', userRoutes);

export default router;
