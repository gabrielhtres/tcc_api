import express from 'express';
import { AnalysisController } from '../Controllers/AnalysisController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const analysisController = new AnalysisController();
const router = express.Router();

router.get(
    '/user/:id',
    validateId,
    authUser,
    analysisController.getByUserId.bind(analysisController)
);

router.get(
    '/:id',
    validateId,
    authUser,
    analysisController.getById.bind(analysisController)
);

router.post('/', authUser, analysisController.create.bind(analysisController));

router.put(
    '/:id',
    validateId,
    authUser,
    analysisController.update.bind(analysisController)
);

router.delete(
    '/:id',
    validateId,
    authUser,
    analysisController.delete.bind(analysisController)
);

export default router;
