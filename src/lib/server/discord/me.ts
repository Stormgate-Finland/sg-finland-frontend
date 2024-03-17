import type { DiscordUserResponse } from '$types/discord';
import type { PageServerLoadEvent } from '../../../routes/$types';
import { discordConfig } from './config';

export const getDiscordUser = async (
	fetch: PageServerLoadEvent['fetch'],
	accessToken: string,
): Promise<DiscordUserResponse> => {
	if (!accessToken) {
		throw new Error('No access token provided');
	}
	const userEndpoint = `${discordConfig.apiUrl}/users/@me`;
	const response = await fetch(userEndpoint, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	const data = await response.json();
	return data;
};

type DiscordImageFormat = 'webp' | 'png' | 'jpg' | 'gif';

export const getAvatarUrl = (
	discordUserId: string,
	avatarHash: string,
	format: DiscordImageFormat = 'webp',
) => {
	return `https://cdn.discordapp.com/avatars/${discordUserId}/${avatarHash}.${format}`;
};
