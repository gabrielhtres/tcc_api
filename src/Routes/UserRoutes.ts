import express from 'express';
import { UserController } from '../Controllers/UserController';
import authUser from '../Middlewares/authUser';

const userController = new UserController();
const router = express.Router();

router.get('/:id', authUser, userController.getById.bind(userController));

router.post('/logout', authUser, userController.logout.bind(userController));

router.put('/:id', authUser, userController.update.bind(userController));

router.delete('/:id', authUser, userController.delete.bind(userController));

export default router;
