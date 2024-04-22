import { initTranslations } from '$/lib/server/i18n/loadTranslations';
import { getSiteSettings } from '$lib/server/strapi/siteSettings';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const [siteSettings, i18n] = await Promise.all([
		getSiteSettings(),
		initTranslations(event),
	]);

	return {
		siteSettings: siteSettings?.data ?? null,
		user: event.locals.user ?? null,
		...i18n,
	};
};
