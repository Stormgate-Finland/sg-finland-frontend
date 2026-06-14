import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		siteSettings: null,
		user: null,
		discordServer: null,
		i18n: null,
		translations: null,
	};
};
