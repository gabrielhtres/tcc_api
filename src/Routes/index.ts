import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

router.use('/user', userRoutes);

export default router;
