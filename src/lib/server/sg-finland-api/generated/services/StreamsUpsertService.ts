/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsUpsertService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Stream or update an existing one
     * @returns any Returns the created/updated stream
     * @throws ApiError
     */
    public postStreamUpsert({
        requestBody,
    }: {
        requestBody?: {
            id: number;
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
            method: 'POST',
            url: '/api/streams/upsert',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Stream not found from external API`,
            },
        });
    }
}
