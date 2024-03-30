/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsListService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List existing Streams
     * @returns any Returns the list of streams
     * @throws ApiError
     */
    public getStreamList(): CancelablePromise<{
        success: boolean;
        result: Array<{
            id: number;
            providerId: string;
            provider: 'twitch' | 'youtube';
            url: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/streams',
        });
    }
}
