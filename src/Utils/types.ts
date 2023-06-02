import { Request } from 'express';

interface RequestWithToken extends Request {
    token?: string;
}

export { RequestWithToken };
