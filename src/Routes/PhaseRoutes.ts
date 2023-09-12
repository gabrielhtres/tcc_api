import express from 'express';
import { PhaseController } from '../Controllers/PhaseController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const phaseController = new PhaseController();
const router = express.Router();

router.get(
    '/list/:id',
    authUser,
    phaseController.getByPlotId.bind(phaseController)
);

router.get(
    '/:id',
    validateId,
    authUser,
    phaseController.getById.bind(phaseController)
);

router.post('/:id', authUser, phaseController.create.bind(phaseController));

router.put(
    '/:id',
    validateId,
    authUser,
    phaseController.update.bind(phaseController)
);

router.delete(
    '/:id',
    validateId,
    authUser,
    phaseController.delete.bind(phaseController)
);

export default router;
