/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { LeaderboardsRanked1V1Service } from './services/LeaderboardsRanked1V1Service';
import { StreamsCreateService } from './services/StreamsCreateService';
import { StreamsDeleteService } from './services/StreamsDeleteService';
import { StreamsListService } from './services/StreamsListService';
import { StreamsLiveService } from './services/StreamsLiveService';
import { StreamsUpdateService } from './services/StreamsUpdateService';
import { StreamsUpsertService } from './services/StreamsUpsertService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class SGFApi {
    public readonly leaderboardsRanked1V1: LeaderboardsRanked1V1Service;
    public readonly streamsCreate: StreamsCreateService;
    public readonly streamsDelete: StreamsDeleteService;
    public readonly streamsList: StreamsListService;
    public readonly streamsLive: StreamsLiveService;
    public readonly streamsUpdate: StreamsUpdateService;
    public readonly streamsUpsert: StreamsUpsertService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.leaderboardsRanked1V1 = new LeaderboardsRanked1V1Service(this.request);
        this.streamsCreate = new StreamsCreateService(this.request);
        this.streamsDelete = new StreamsDeleteService(this.request);
        this.streamsList = new StreamsListService(this.request);
        this.streamsLive = new StreamsLiveService(this.request);
        this.streamsUpdate = new StreamsUpdateService(this.request);
        this.streamsUpsert = new StreamsUpsertService(this.request);
    }
}

