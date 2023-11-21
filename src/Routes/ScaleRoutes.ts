import express from 'express';
import { ScaleController } from '../Controllers/ScaleController';
import { ScalePartController } from '../Controllers/ScalePartController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const scaleController = new ScaleController();
const scalePartController = new ScalePartController();
const router = express.Router();

router.get('/list', authUser, scaleController.getAll.bind(scaleController));

router.get(
	'/part/list/:id',
	validateId,
	authUser,
	scalePartController.getByScaleId.bind(scalePartController),
);

router.get(
	'/part/:id',
	validateId,
	authUser,
	scalePartController.getById.bind(scalePartController),
);

router.get(
	'/:id',
	validateId,
	authUser,
	scaleController.getById.bind(scaleController),
);

router.post(
	'/part/:id',
	validateId,
	authUser,
	scalePartController.create.bind(scalePartController),
);

router.post('/', authUser, scaleController.create.bind(scaleController));

router.put(
	'/part/:id',
	validateId,
	authUser,
	scalePartController.update.bind(scalePartController),
);

router.put(
	'/:id',
	validateId,
	authUser,
	scaleController.update.bind(scaleController),
);

router.delete(
	'/part/:id',
	validateId,
	authUser,
	scalePartController.delete.bind(scalePartController),
);

router.delete(
	'/:id',
	validateId,
	authUser,
	scaleController.delete.bind(scaleController),
);

export default router;
