/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsLiveService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get live streams
     * @returns any Returns a list of live streams that are streaming Stormgate
     * @throws ApiError
     */
    public getStreamLive(): CancelablePromise<{
        success: boolean;
        error: string;
        result: Array<{
            id: number;
            name: string;
            title: string;
            viewers: number;
            thumbnailUrl?: string;
            url: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/streams/live',
        });
    }
}
