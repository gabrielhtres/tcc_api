import express from 'express';
import { UserController } from '../Controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/users', userController.getAllUsers.bind(UserController));

export default router;
