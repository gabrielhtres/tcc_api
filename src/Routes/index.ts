import express, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import { RequestLoginWithToken, RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';
import loginUser from '../Middlewares/LoginUser';

const router = express.Router();
const userController = new UserController();

router.post('/signin', loginUser);

router.post('/signup', userController.create.bind(userController));

router.use('/user', userRoutes);

export default router;
