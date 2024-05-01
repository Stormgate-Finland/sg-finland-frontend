import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { PUBLIC_APP_URL } from '$env/static/public';
import { connectSteam } from '$lib/server/strapi/authConnect';

export const load: PageServerLoad = async ({ url, cookies, locals }) => {
	const session = cookies.get('session');

	if (session && locals.user.id) {
		const success = await connectSteam(url.toString(), session);
		if (success) {
			throw redirect(302, `${PUBLIC_APP_URL}/me`);
		} else {
			error(500, 'Unexpected error');
		}
	}

	error(401, 'Unauthorized');
};
