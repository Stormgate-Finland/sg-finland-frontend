import { PUBLIC_DISCORD_SERVER_ID } from '$env/static/public';
import { getDiscordServerWidget } from '$lib/api/discord/widget';
import { addTranslations, setLocale, setRoute } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	const { siteSettings, user, i18n, translations } = data;
	const { locale, route } = i18n;
	const discordServer = await getDiscordServerWidget(PUBLIC_DISCORD_SERVER_ID);

	addTranslations(translations);

	await setRoute(route);
	await setLocale(locale);

	return {
		siteSettings,
		user,
		discordServer,
		i18n,
	};
};
