import express from 'express';
import { DiseaseController } from '../Controllers/DiseaseController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const diseaseController = new DiseaseController();
const router = express.Router();

router.get(
    '/list-select',
    authUser,
    diseaseController.getSelectList.bind(diseaseController)
);

router.get(
    '/list/:id',
    authUser,
    diseaseController.getByPhaseId.bind(diseaseController)
);

router.get(
    '/:id',
    validateId,
    authUser,
    diseaseController.getById.bind(diseaseController)
);

router.post('/:id', authUser, diseaseController.create.bind(diseaseController));

router.put(
    '/:id',
    validateId,
    authUser,
    diseaseController.update.bind(diseaseController)
);

router.delete(
    '/:id',
    validateId,
    authUser,
    diseaseController.delete.bind(diseaseController)
);

export default router;
