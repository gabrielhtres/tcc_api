import express from 'express';
import { UserController } from '../Controllers/UserController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const userController = new UserController();
const router = express.Router();

router.post('/logout', authUser, userController.logout.bind(userController));
router.post('/refresh', userController.refresh.bind(userController));

router.get(
    '/:id',
    validateId,
    authUser,
    userController.getById.bind(userController)
);

router.put(
    '/:id',
    validateId,
    authUser,
    userController.update.bind(userController)
);

router.delete(
    '/:id',
    validateId,
    authUser,
    userController.delete.bind(userController)
);

export default router;
