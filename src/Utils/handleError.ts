import {
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime/library';

function handleError(
    error:
        | PrismaClientKnownRequestError
        | PrismaClientUnknownRequestError
        | PrismaClientValidationError
): {
    code: number;
    message: string;
} {
    if (error instanceof Error) {
    }

    if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            return {
                code: 400,
                message: `Já exite um ${error.meta?.target} cadastrado com o valor informado`,
            };
        }

        if (error.code === 'P2011') {
            return {
                code: 400,
                message: `O valor informado para ${error.meta?.target} é inválido`,
            };
        }

        if (error.code === 'P2025') {
            return {
                code: 404,
                message: `Este registro não foi encontado`,
            };
        }

        console.log(error);

        return {
            code: 500,
            message: 'Erro interno no servidor, tente novamente',
        };
    }

    if (error instanceof PrismaClientUnknownRequestError) {
        return {
            code: 500,
            message: error.message,
        };
    }

    if (error instanceof PrismaClientValidationError) {
        console.log(error.message);
        return {
            code: 400,
            message: `O campo ${
                error.message.split('`')[3]
            } deve estar preenchido corretamente`,
        };
    }

    return { code: 500, message: 'Erro interno no servidor' };
}

export default handleError;
