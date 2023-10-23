import type { SiteSettingEntityResponse } from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

export async function getSiteSettings(query?: StrapiQuery): Promise<SiteSettingEntityResponse> {
	const endpoint = '/api/site-setting';
	return strapiFetch(endpoint, query);
}
