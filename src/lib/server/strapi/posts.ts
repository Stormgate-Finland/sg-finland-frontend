import type { PostEntityResponseCollection } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

export async function getPosts(query?: StrapiQuery): Promise<PostEntityResponseCollection> {
	const endpoint = '/api/posts';
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch(endpoint, query, defaultQuery);
}
