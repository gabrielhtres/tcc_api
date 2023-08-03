import { Request } from 'express';

interface RequestWithToken extends Request {
    token?: string;
}

interface RequestLogin extends RequestWithToken {
    userId?: number;
}

export { RequestWithToken, RequestLogin };
