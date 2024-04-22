import type { DiscordServer } from '$types/discord';
import type { LoadEvent } from '@sveltejs/kit';

export const getDiscordServerWidget = async (fetch: LoadEvent['fetch'], serverId: string) => {
	const endpoint = `https://discord.com/api/guilds/${serverId}/widget.json`;
	const response = await fetch(endpoint);
	const data = await response.json();
	return data as DiscordServer;
};
