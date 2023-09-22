import express, { Response } from 'express';
import userRoutes from './UserRoutes';
import analysisRoutes from './AnalysisRoutes';
import plotRoutes from './PlotRoutes';
import phaseRoutes from './PhaseRoutes';
import diseaseRoutes from './DiseaseRoutes';
import fungicideRoutes from './FungicideRoutes';
import authUser from '../Middlewares/authUser';
import { RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';

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
router.use('/phase', phaseRoutes);
router.use('/disease', diseaseRoutes);
router.use('/fungicide', fungicideRoutes);

export default router;
