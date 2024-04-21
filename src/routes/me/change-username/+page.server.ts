import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { updateMe } from '$lib/server/strapi/users';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user?.id) {
		throw redirect(302, '/login?redirect=/me/change-username');
	}
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions = {
	changeUsername: async ({ cookies, locals, request }) => {
		const session = cookies.get('session');
		if (!session || !locals.user) {
			return fail(401, { error: 'Unauthorized' });
		}
		const data = await request.formData();
		const username = data.get('username');
		const result = await updateMe({ username }, session);
		if (result?.error) {
			return fail(500, { error: 'Unexpected error' });
		}
		redirect(302, '/me');
	},
};
