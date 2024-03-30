/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsUpdateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update existing Stream
     * @returns any Returns the updated stream
     * @throws ApiError
     */
    public putStreamUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: {
            url: string;
        },
    }): CancelablePromise<{
        success: boolean;
        result: {
            id: number;
            providerId: string;
            provider: 'twitch' | 'youtube';
            avatarUrl?: string;
            url: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/streams/update/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Stream not found`,
            },
        });
    }
}
