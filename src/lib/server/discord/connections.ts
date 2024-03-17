import type { DiscordUserConnectionsResponse } from '$types/discord';
import type { PageServerLoadEvent } from '../../../routes/$types';
import { discordConfig } from './config';

export const getDiscordUserConnections = async (
	fetch: PageServerLoadEvent['fetch'],
	accessToken: string,
): Promise<DiscordUserConnectionsResponse> => {
	if (!accessToken) {
		throw new Error('No access token provided');
	}
	const userEndpoint = `${discordConfig.apiUrl}/users/@me/connections`;
	const response = await fetch(userEndpoint, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	const data = await response.json();
	return data;
};
