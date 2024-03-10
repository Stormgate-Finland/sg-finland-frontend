import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { AUTH_DISCORD_ID, AUTH_DISCORD_SECRET, NODE_ENV } from '$env/static/private';
import type { AccessTokenResponse } from '$types/discord';
import { loginCallback } from '$/lib/server/strapi/auth';

const discordAuth = {
	endpoint: 'https://discord.com/api/v10',
	clientId: AUTH_DISCORD_ID,
	secret: AUTH_DISCORD_SECRET,
	redirect: 'http://localhost:5173/auth/callback/discord',
};

async function getAccessToken(
	fetch: PageServerLoadEvent['fetch'],
	code: string,
): Promise<AccessTokenResponse> {
	const postData = {
		grant_type: 'authorization_code',
		code,
		redirect_uri: discordAuth.redirect,
	};
	const tokenEndpoint = `${discordAuth.endpoint}/oauth2/token`;
	const body = new URLSearchParams(postData);

	const response = await fetch(tokenEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Basic ' + Buffer.from(`${discordAuth.clientId}:${discordAuth.secret}`).toString('base64'),
		},
		body: body.toString(),
	});
	const data = await response.json();
	if (!data?.access_token) {
		throw new Error('Did not get access token from Discord');
	}
	return data;
}

export const load: PageServerLoad = async ({ fetch, locals, cookies, url }) => {
	const session = cookies.get('session');
	if (!session) {
		const code = url.searchParams.get('code');
		if (!code) {
			throw new Error('No code provided');
		}
		const accessToken = await getAccessToken(fetch, code);
		const session = await loginCallback('discord', accessToken.access_token);
		locals.user = session.user;
		const httpOnly = NODE_ENV === 'production';
		cookies.set('session', session.jwt ?? '', { httpOnly, sameSite: 'lax', path: '/' });
	}

	throw redirect(302, 'http://localhost:5173/me');
};
