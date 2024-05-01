import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_APP_URL } from '$env/static/public';
import { loginCallback } from '$lib/server/strapi/authConnect';

const DEFAULT_REDIRECT = '/me';

export const load: PageServerLoad = async ({ locals, cookies, url }) => {
	const session = cookies.get('session');
	const redirectPath = url.searchParams.get('redirect') ?? DEFAULT_REDIRECT;

	if (!session) {
		const code = url.searchParams.get('code');
		if (!code) {
			throw new Error('No code provided');
		}
		const session = await loginCallback('discord', code);
		locals.user = session.user;
		cookies.set('session', session.jwt ?? '', {
			httpOnly: true,
			sameSite: 'lax',
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
		});
	}

	throw redirect(302, `${PUBLIC_APP_URL}${redirectPath}`);
};
