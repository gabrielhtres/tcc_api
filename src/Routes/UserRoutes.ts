import express from 'express';
import { UserController } from '../Controllers/UserController';
import authUser from '../Middlewares/AuthUser';

const userController = new UserController();
const router = express.Router();

router.get('/', userController.getAllUsers.bind(userController));
// router.post('/signup', userController.create.bind(userController));

export default router;
