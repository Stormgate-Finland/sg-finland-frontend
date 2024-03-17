import { AUTH_DISCORD_SECRET } from '$env/static/private';
import { PUBLIC_APP_URL, PUBLIC_AUTH_DISCORD_ID } from '$env/static/public';

export const discordConfig = {
	apiUrl: 'https://discord.com/api/v10',
	clientId: PUBLIC_AUTH_DISCORD_ID,
	secret: AUTH_DISCORD_SECRET,
	redirect: `${PUBLIC_APP_URL}/auth/callback/discord`,
};
