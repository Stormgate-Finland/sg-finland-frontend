import { getSiteSettings } from '$lib/server/strapi/siteSettings';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const siteSettings = await getSiteSettings();
	return {
		siteSettings: siteSettings?.data ?? null,
		session: await event.locals.auth(),
	};
};
