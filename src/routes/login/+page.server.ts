import type { PageServerLoad } from './$types';
import { PUBLIC_AUTH_DISCORD_ID } from '$env/static/public';
import { stringify } from 'qs';

export const load: PageServerLoad = async (event) => {
	const {
		url: { protocol, host },
	} = event;
	const scopes = ['identify', 'email', 'connections'].join('+');
	const currentUrl = protocol + '//' + host;
	const queryString = stringify(
		{
			client_id: PUBLIC_AUTH_DISCORD_ID,
			response_type: 'code',
			redirect_uri: `${currentUrl}/auth/callback/discord`,
			scope: scopes,
		},
		{ encode: false },
	);
	return {
		connectWithDiscordUrl: `https://discord.com/oauth2/authorize?${queryString}`,
	};
};
