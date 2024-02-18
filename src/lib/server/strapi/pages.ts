import type { PageEntityResponse, PageEntityResponseCollection } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

const endpoint = '/api/pages';

export async function getPages(query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch<PageEntityResponseCollection>(endpoint, query ?? defaultQuery);
}

export async function getPage(id: string | number, query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<PageEntityResponse>(endpoint + `/${id}`, query ?? defaultQuery);
}
