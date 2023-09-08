import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import analysisRoutes from './AnalysisRoutes';
import plotRoutes from './PlotRoutes';
import { RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';
import authUser from '../Middlewares/authUser';

const router = express.Router();
const userController = new UserController();

router.get('/', (req: RequestWithToken, res: Response) => {
    res.send('API GreenVision');
});

router.post('/signup', userController.create.bind(userController));
router.post('/signin', userController.login.bind(userController));
router.post(
    '/validate',
    authUser,
    userController.validateToken.bind(userController)
);

router.use('/user', userRoutes);
router.use('/analysis', analysisRoutes);
router.use('/plot', plotRoutes);

export default router;
