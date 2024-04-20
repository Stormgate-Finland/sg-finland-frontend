import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema.js';
import { zod } from 'sveltekit-superforms/adapters';
import { verifyEmail } from '$lib/server/strapi/users';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user?.id) {
		throw redirect(302, '/login?redirect=/me/change-username');
	}
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions = {
	verifyEmail: async ({ cookies, locals, request }) => {
		const session = cookies.get('session');
		if (!session || !locals.user) {
			return fail(401, { error: 'Unauthorized' });
		}
		const data = await request.formData();
		const code = data.get('code');
		const result = await verifyEmail({ token: code }, session);
		if (result?.error) {
			return fail(500, { error: 'Unexpedted error' });
		}
		redirect(302, '/me');
	},
};
