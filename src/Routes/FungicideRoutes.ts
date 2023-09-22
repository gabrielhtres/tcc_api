import express from 'express';
import { FungicideController } from '../Controllers/FungicideController';
import authUser from '../Middlewares/authUser';
import validateId from '../Middlewares/validateId';

const fungicideController = new FungicideController();
const router = express.Router();

router.get(
    '/list-select/:id',
    validateId,
    authUser,
    fungicideController.getSelectList.bind(fungicideController)
);

router.get(
    '/list/:id',
    authUser,
    fungicideController.getByDiseaseId.bind(fungicideController)
);

router.get(
    '/:id',
    validateId,
    authUser,
    fungicideController.getById.bind(fungicideController)
);

router.post(
    '/:id',
    authUser,
    fungicideController.create.bind(fungicideController)
);

router.put(
    '/:id',
    validateId,
    authUser,
    fungicideController.update.bind(fungicideController)
);

// router.delete(
//     '/:id',
//     validateId,
//     authUser,
//     fungicideController.delete.bind(fungicideController)
// );

export default router;
