import type { AccessTokenResponse } from '$types/discord';
import type { PageServerLoadEvent } from '../../../routes/$types';
import { discordConfig } from './config';

export async function getDiscordAccessToken(
	fetch: PageServerLoadEvent['fetch'],
	code: string,
): Promise<AccessTokenResponse> {
	const postData = {
		grant_type: 'authorization_code',
		code,
		redirect_uri: discordConfig.redirect,
	};
	const tokenEndpoint = `${discordConfig.apiUrl}/oauth2/token`;
	const body = new URLSearchParams(postData);

	const response = await fetch(tokenEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Basic ' +
				Buffer.from(`${discordConfig.clientId}:${discordConfig.secret}`).toString('base64'),
		},
		body: body.toString(),
	});
	const data = await response.json();
	if (!data?.access_token) {
		throw new Error('Did not get access token from Discord');
	}
	return data;
}
