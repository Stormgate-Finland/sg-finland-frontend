import { initTranslations } from '$/lib/server/i18n/loadTranslations';
import { PUBLIC_DISCORD_SERVER_ID } from '$env/static/public';
import { getDiscordServerWidget } from '$lib/server/discord/widget';
import { getSiteSettings } from '$lib/server/strapi/siteSettings';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const [siteSettings, i18n, discordServer] = await Promise.all([
		getSiteSettings(),
		initTranslations(event),
		getDiscordServerWidget(event.fetch, PUBLIC_DISCORD_SERVER_ID),
	]);

	return {
		siteSettings: siteSettings?.data ?? null,
		discordServer: discordServer ?? null,
		user: event.locals.user ?? null,
		...i18n,
	};
};
