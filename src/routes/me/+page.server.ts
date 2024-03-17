import { getUserConnections } from '$/lib/server/strapi/userConnections';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user?.id) {
		throw redirect(302, '/login?redirect=/me');
	}
	const connections = await getUserConnections(locals.user.id);
	return {
		connections: connections?.data ?? [],
	};
};
