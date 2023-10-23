import { PUBLIC_TWICPICS_DOMAIN } from '$env/static/public';
import { installTwicPics } from '@twicpics/components/sveltekit';
import '@twicpics/components/style.css';
if (PUBLIC_TWICPICS_DOMAIN) {
	installTwicPics({
		domain: `https://${PUBLIC_TWICPICS_DOMAIN}`,
	});
}
