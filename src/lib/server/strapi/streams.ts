import type { StreamEntityResponseCollection } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';
import type { StrapiStreamsLiveResponse } from '$types/streams';

export async function getStreams(query?: StrapiQuery): Promise<StreamEntityResponseCollection> {
	const endpoint = '/api/streams';
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch(endpoint, query ?? defaultQuery);
}

export async function getLiveStreams(): Promise<StrapiStreamsLiveResponse[]> {
	const endpoint = '/api/streams/live';
	return strapiFetch(endpoint);
}
