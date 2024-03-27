import { getUserConnections } from '$/lib/server/strapi/userConnections';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import SteamAuth from '$/lib/server/steam/steamAuth';
import { PUBLIC_APP_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user?.id) {
		throw redirect(302, '/login?redirect=/me');
	}
	const connections = await getUserConnections(locals.user.id);
	const connectSteamUrl = await new SteamAuth({
		realm: PUBLIC_APP_URL,
		returnUrl: `${PUBLIC_APP_URL}/auth/callback/steam`,
	}).getRedirectUrl();

	return {
		connections: connections?.data ?? [],
		connectSteamUrl,
	};
};
