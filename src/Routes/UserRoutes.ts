import express from 'express';
import { UserController } from '../Controllers/UserController';

const userController = new UserController();
const router = express.Router();

router.get('/:id', userController.getById.bind(userController));
// router.get('/', userController.getAll.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

export default router;
