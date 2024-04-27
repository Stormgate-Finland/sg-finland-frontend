import { getMyConnections } from '$/lib/server/strapi/userConnections';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import SteamAuth from '$/lib/server/steam/steamAuth';
import { PUBLIC_APP_URL } from '$env/static/public';
import {
	Enum_Userconnection_Provider,
	Enum_Userspermissionsuser_Faction,
} from '$types/generated/strapi';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchemaChangeFaction } from './schema';
import { updateMe } from '$lib/server/strapi/users';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const session = cookies.get('session');
	if (!session) {
		throw redirect(302, '/login?redirect=/me');
	}
	const connections = await getMyConnections(session);
	const connectSteamUrl = !connections.data.some(
		(c) => c.attributes?.provider === Enum_Userconnection_Provider.Steam,
	)
		? await new SteamAuth({
				realm: PUBLIC_APP_URL,
				returnUrl: `${PUBLIC_APP_URL}/auth/callback/steam`,
			}).getRedirectUrl()
		: undefined;

	return {
		connections: connections?.data ?? [],
		connectSteamUrl,
		form: await superValidate(zod(formSchemaChangeFaction), {
			defaults: {
				faction: locals.user?.faction as Enum_Userspermissionsuser_Faction,
			},
		}),
	};
};

export const actions = {
	changeFaction: async ({ cookies, locals, request }) => {
		const session = cookies.get('session');
		if (!session || !locals.user) {
			return fail(401, { error: 'Unauthorized' });
		}
		const data = await request.formData();
		const faction = data.get('faction');
		const result = await updateMe({ faction }, session);
		if (result?.error) {
			return fail(500, { error: 'Unexpected error' });
		}
		redirect(302, '/me');
	},
};
