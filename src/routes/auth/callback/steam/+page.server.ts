import type { PageServerLoad } from './$types';
import SteamAuth from '$/lib/server/steam/steamAuth';
import { error, redirect } from '@sveltejs/kit';
import { createUserConnection } from '$/lib/server/strapi/userConnections';
import { Enum_Userconnection_Provider } from '$types/generated/strapi';
import { PUBLIC_APP_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ url, cookies, locals }) => {
	const session = cookies.get('session');

	if (session && locals.user.id) {
		const steamid = await new SteamAuth({
			realm: PUBLIC_APP_URL,
			returnUrl: `${PUBLIC_APP_URL}/auth/callback/steam`,
		}).authenticate(url.href);

		await createUserConnection(
			{
				provider: Enum_Userconnection_Provider.Steam,
				externalId: steamid,
				user: locals.user.id,
			},
			session,
		);

		throw redirect(302, `${PUBLIC_APP_URL}/me`);
	}

	error(401, 'Unauthorized');
};
