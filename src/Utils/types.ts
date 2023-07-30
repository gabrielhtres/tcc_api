import { Request } from 'express';

interface RequestWithToken extends Request {
    token?: string;
}

interface RequestLogin extends RequestWithToken {
    userId?: number;
}

type TablesType = 'User' | 'Analysis';

export { RequestWithToken, RequestLogin, TablesType };
