import type { PostEntityResponse, PostEntityResponseCollection } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

const endpoint = '/api/posts';

export async function getPosts(query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch<PostEntityResponseCollection>(endpoint, query, defaultQuery);
}

export async function getPost(id: string | number, query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<PostEntityResponse>(endpoint + `/${id}`, query, defaultQuery);
}
