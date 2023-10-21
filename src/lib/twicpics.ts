import { env } from '$env/dynamic/public';
import { installTwicPics } from '@twicpics/components/sveltekit';
import '@twicpics/components/style.css';
installTwicPics({
	domain: `https://${env.PUBLIC_TWICPICS_DOMAIN}`,
});
