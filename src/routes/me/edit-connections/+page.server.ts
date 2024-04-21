import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';
import { getMyConnections, updateMyUserConnections } from '$lib/server/strapi/userConnections.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ cookies }) => {
	const session = cookies.get('session');
	if (!session) {
		throw redirect(302, '/login?redirect=/me/edit-connections');
	}
	const connections = await getMyConnections(session, { filters: { provider: { ne: 'discord' } } });
	return {
		connections: connections?.data ?? [],
		form: await superValidate(zod(formSchema), {
			defaults: {
				id: connections.data.map((connection) => Number(connection.id)),
				public: connections.data.map((connection) => !connection.attributes?.hidden),
			},
		}),
	};
};

export const actions = {
	updateConnections: async ({ cookies, request }) => {
		const session = cookies.get('session');
		if (!session) {
			return fail(401, { error: 'Unauthorized' });
		}
		const data = await request.formData();

		const ids = data.getAll('id');
		const publics = data.getAll('public');
		const connections = ids.map((id, index) => ({
			id: Number(id),
			hidden: publics[index] === 'false',
		}));

		const result = await updateMyUserConnections(connections, session);
		if (result?.error) {
			return fail(500, { error: 'Unexpected error' });
		}
		redirect(302, '/me');
	},
};
