import express from 'express';
import { AnalysisController } from '../Controllers/AnalysisController';
import authUser from '../Middlewares/authUser';

const analysisController = new AnalysisController();
const router = express.Router();

router.get(
    '/user/:id',
    authUser,
    analysisController.getByUserId.bind(analysisController)
);

router.get(
    '/:id',
    authUser,
    analysisController.getById.bind(analysisController)
);

router.post(
    '/:id',
    authUser,
    analysisController.create.bind(analysisController)
);

router.put(
    '/:id',
    authUser,
    analysisController.update.bind(analysisController)
);

router.delete(
    '/:id',
    authUser,
    analysisController.delete.bind(analysisController)
);

export default router;
