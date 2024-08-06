/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LeaderboardsRanked1V1Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List ranked 1v1 match leaderboards
     * @returns any Returns a list of players in the 1v1 ranked leaderboard
     * @throws ApiError
     */
    public getLeaderboardRanked1V1({
        race,
        page,
        count,
        order,
        query,
    }: {
        race?: 'infernals' | 'vanguard' | 'celestials' | 'random',
        page?: number,
        count?: number,
        order?: 'points' | 'mmr',
        query?: string,
    }): CancelablePromise<{
        success: boolean;
        error: string;
        result: {
            page: number;
            count: number;
            total: number;
            entries: Array<{
                leaderboard_entry_id: string;
                leaderboard: {
                    Ranked_1v1: string;
                    Unranked_1v1: string;
                    Custom: string;
                };
                player_id: string;
                anonymous: boolean;
                nickname: string;
                nickname_discriminator: string;
                avatar_url: string;
                rank?: number;
                race: {
                    Infernals: string;
                    Vanguard: string;
                    Celestials: string;
                };
                league: {
                    Aspirant: string;
                    Bronze: string;
                    Silver: string;
                    Gold: string;
                    Platinum: string;
                    Diamond: string;
                    Master: string;
                };
                tier?: number;
                mmr: number;
                max_confirmed_mmr?: number;
                points?: number;
                wins: number;
                losses: number;
                ties?: number;
                matches: number;
                win_rate: number;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/ladder/leaderboard/1v1',
            query: {
                'race': race,
                'page': page,
                'count': count,
                'order': order,
                'query': query,
            },
        });
    }
}
