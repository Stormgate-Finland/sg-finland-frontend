import type { DiscordServer } from '$types/discord';

export const getDiscordServerWidget = async (serverId: string) => {
	const endpoint = `https://discord.com/api/guilds/${serverId}/widget.json`;
	const response = await fetch(endpoint);
	const data = await response.json();
	return data as DiscordServer;
};
