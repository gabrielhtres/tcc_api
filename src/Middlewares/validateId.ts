import { NextFunction, Request, Response } from 'express';

function validateId(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    if (!/^\d+$/.test(id)) {
        return res.status(404).json({ message: 'Rota não encontrada' });
    }

    next();
}

export default validateId;
