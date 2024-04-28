import type { PageServerLoad } from './$types';
import SteamAuth from '$/lib/server/steam/steamAuth';
import { error, redirect } from '@sveltejs/kit';
import { PUBLIC_APP_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const session = cookies.get('session');

	if (session && locals.user.id) {
		const connectSteamUrl = await new SteamAuth({
			realm: PUBLIC_APP_URL,
			returnUrl: `${PUBLIC_APP_URL}/auth/callback/steam`,
		}).getRedirectUrl();

		throw redirect(302, connectSteamUrl);
	}

	error(401, 'Unauthorized');
};
