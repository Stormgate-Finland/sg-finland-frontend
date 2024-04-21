import type { DiscordServer } from '$types/discord';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const getDiscordServerWidget = async (fetch: ServerLoadEvent['fetch'], serverId: string) => {
	const endpoint = `https://discord.com/api/guilds/${serverId}/widget.json`;
	const response = await fetch(endpoint);
	const data = await response.json();
	return data as DiscordServer;
};
