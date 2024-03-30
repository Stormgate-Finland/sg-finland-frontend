/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsDeleteService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Delete existing Stream
     * @returns any Returns status if stream was deleted
     * @throws ApiError
     */
    public deleteStreamDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<{
        success: boolean;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/streams/delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Stream not found`,
            },
        });
    }
}
