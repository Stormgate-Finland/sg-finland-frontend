import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';
import { deleteUser } from '$lib/server/strapi/users';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user?.id) {
		redirect(302, '/login?redirect=/me/delete-account');
	}
};

export const actions = {
	delete: async ({ cookies, locals }) => {
		const session = cookies.get('session');
		if (!session || !locals.user) {
			return fail(401, { error: 'Unauthorized' });
		}
		const result = await deleteUser(locals.user.id, session);
		if (result?.error) {
			return fail(500, { error: 'Unexpected error' });
		}
		redirect(302, '/logout');
	},
};
