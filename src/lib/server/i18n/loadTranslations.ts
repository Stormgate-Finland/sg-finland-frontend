import { locales, loadTranslations, translations, defaultLocale } from '$lib/translations';
import type { ServerLoadEvent } from '@sveltejs/kit';

const USE_DEFAULT_LOCALE_ALWAYS = true;

export const initTranslations = async (event: ServerLoadEvent) => {
	const { pathname } = event.url;

	const locale = getLocale(event);
	await loadTranslations(locale, pathname); // keep this just before the `return` in layout

	return {
		i18n: { locale, route: pathname },
		translations: translations.get(), // `translations` on server contain all translations loaded by different clients
	};
};

const getLocale = (event: ServerLoadEvent) => {
	if (USE_DEFAULT_LOCALE_ALWAYS) {
		return defaultLocale;
	}

	// Try to get the locale from cookie
	let locale = (event.cookies.get('lang') || '').toLowerCase();

	// Get user preferred locale
	if (!locale) {
		locale =
			`${`${event.request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
	}

	// Get defined locales
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	// Use default locale if current locale is not supported
	if (!supportedLocales.includes(locale)) {
		locale = defaultLocale;
	}

	return locale;
};
