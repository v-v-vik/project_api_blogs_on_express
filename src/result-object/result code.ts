
export type Result<T = null> = {
    status: ResultStatus;
    data: T;
};

export enum ResultStatus {
    Success = 'Success',
    NotFound = 'NotFound',
    Forbidden = 'Forbidden',
    Unauthorized = 'Unauthorized',
    BadRequest = 'BadRequest',
    Created = 'Created',
    NoContent = 'NoContent'

}

export enum HttpStatuses {
    Success = 200,
    Created = 201,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500,
}

export const resultCode = (resultCode: ResultStatus): number => {
    switch (resultCode) {
        case ResultStatus.BadRequest:
            return HttpStatuses.BadRequest;
        case ResultStatus.Forbidden:
            return HttpStatuses.Forbidden;
        case ResultStatus.Success:
            return HttpStatuses.Success;
        case ResultStatus.Created:
            return HttpStatuses.Created;
        case ResultStatus.NoContent:
            return HttpStatuses.NoContent;
        case ResultStatus.Unauthorized:
            return HttpStatuses.Unauthorized;
        case ResultStatus.NotFound:
            return HttpStatuses.NotFound;

        default:
            return HttpStatuses.ServerError;
    }
};