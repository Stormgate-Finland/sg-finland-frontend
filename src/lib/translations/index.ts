import i18n, { type Config } from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'fi';

export const config = {
	log: {
		level: dev ? 'warn' : 'error',
	},
	translations: {
		en: { lang },
		fi: { lang },
	},
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./en/common.json')).default,
		},
		{
			locale: 'fi',
			key: '',
			loader: async () => (await import('./fi/common.json')).default,
		},
	],
} satisfies Config;

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute,
} = new i18n(config);

// eslint-disable-next-line no-console
// loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
