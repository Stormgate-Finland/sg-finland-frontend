import { loadTranslations, translations, defaultLocale } from '$lib/translations';

export const initTranslations = async () => {
	const locale = defaultLocale; // getLocale(event);
	await loadTranslations(locale); // keep this just before the `return` in layout

	return {
		i18n: { locale, route: '/' },
		translations: translations.get(), // `translations` on server contain all translations loaded by different clients
	};
};

/* Locale is always default for now
const getLocale = (event: ServerLoadEvent) => {
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
*/
