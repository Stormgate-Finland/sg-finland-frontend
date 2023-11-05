import type { SiteSettingEntityResponse } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

const endpoint = '/api/site-setting';

export async function getSiteSettings(query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return strapiFetch<SiteSettingEntityResponse>(endpoint, query, defaultQuery);
}
