import express from 'express';
import { PlotController } from '../Controllers/PlotController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const plotController = new PlotController();
const router = express.Router();

router.get(
    '/list/:id',
    authUser,
    plotController.getByPlotId.bind(plotController)
);

router.get(
    '/:id',
    validateId,
    authUser,
    plotController.getById.bind(plotController)
);

router.post('/:id', authUser, plotController.create.bind(plotController));

router.put(
    '/:id',
    validateId,
    authUser,
    plotController.update.bind(plotController)
);

router.delete(
    '/:id',
    validateId,
    authUser,
    plotController.delete.bind(plotController)
);

export default router;
