import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { getRedirectUrl } from '$lib/server/strapi/authConnect';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const session = cookies.get('session');

	if (session && locals.user.id) {
		const redirectUrl = await getRedirectUrl('steam');
		if (redirectUrl) {
			throw redirect(302, redirectUrl);
		} else {
			error(500, 'Unexpected error');
		}
	}

	error(401, 'Unauthorized');
};
