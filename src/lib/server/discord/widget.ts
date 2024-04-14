import type { DiscordServer } from '$types/discord';
import type { ServerLoadEvent } from '@sveltejs/kit';
type Cache<T> = { data: T; expireAt: Date } | null;

let cache: Cache<DiscordServer> = null;

export const getDiscordServerWidget = async (fetch: ServerLoadEvent['fetch'], serverId: string) => {
	if (cache && cache.expireAt > new Date()) {
		return cache.data;
	}
	const endpoint = `https://discord.com/api/guilds/${serverId}/widget.json`;
	const response = await fetch(endpoint);
	const data = await response.json();
	cache = { data, expireAt: new Date(new Date().getTime() + 1000 * 60) };
	return data as DiscordServer;
};
