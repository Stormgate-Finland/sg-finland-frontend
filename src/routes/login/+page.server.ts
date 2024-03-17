import type { PageServerLoad } from './$types';
import { PUBLIC_APP_URL, PUBLIC_AUTH_DISCORD_ID } from '$env/static/public';
import { stringify } from 'qs';

export const load: PageServerLoad = async () => {
	const scopes = ['identify', 'email', 'connections'].join('+');
	const queryString = stringify(
		{
			client_id: PUBLIC_AUTH_DISCORD_ID,
			response_type: 'code',
			redirect_uri: `${PUBLIC_APP_URL}/auth/callback/discord`,
			scope: scopes,
		},
		{ encode: false },
	);
	return {
		connectWithDiscordUrl: `https://discord.com/oauth2/authorize?${queryString}`,
	};
};
