import { Request } from 'express';

interface RequestWithToken extends Request {
    token?: string;
}

interface RequestLoginWithToken extends Request {
    email?: string;
    password?: string;
    token?: string;
}

export { RequestWithToken, RequestLoginWithToken };
