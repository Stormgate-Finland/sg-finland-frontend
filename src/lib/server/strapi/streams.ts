import type { StreamEntityResponseCollection } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

export async function getPosts(query?: StrapiQuery): Promise<StreamEntityResponseCollection> {
	const endpoint = '/api/streams';
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch(endpoint, query, defaultQuery);
}
