import { PUBLIC_TWICPICS_DOMAIN } from '$env/static/public';
import { installTwicPics } from '@twicpics/components/sveltekit';
import '@twicpics/components/style.css';
if (PUBLIC_TWICPICS_DOMAIN) {
	const domain = PUBLIC_TWICPICS_DOMAIN.startsWith('http')
		? PUBLIC_TWICPICS_DOMAIN
		: `https://${PUBLIC_TWICPICS_DOMAIN}`;
	installTwicPics({
		domain,
	});
}
