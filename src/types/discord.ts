export type AccessTokenResponse = {
	access_token: string;
	token_type: 'Bearer';
	expires_in: number;
	refresh_token: string;
	scope: string;
};

export type DiscordUserResponse = {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	premium_type?: number;
	flags?: number;
	banner?: string | null;
	accent_color?: string;
	global_name: string;
	avatar_decoration_data: string | null;
	banner_color?: string | null;
	mfa_enabled?: boolean;
	locale?: string;
	email?: string;
	verified: boolean;
	bot?: boolean;
};

export type DiscordUserConnectionsResponse = [
	{
		id: string;
		name: string;
		type: string;
		revoked?: boolean;
		integrations?: unknown[];
		verified: boolean;
		friend_sync: boolean;
		show_activity: boolean;
		two_way_link: boolean;
		visibility: DiscordVisibility;
		metadata_visibility: DiscordVisibility;
	},
];

export enum DiscordVisibility {
	PRIVATE = 0,
	PUBLIC = 1,
}

export type DiscordChannel = {
	id: string;
	name: string;
	position: number;
};

export type DiscordChannelMember = {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	status: string;
	avatar_url: string;
};

export type DiscordServer = {
	id: string;
	name: string;
	instant_invite: string;
	channels: DiscordChannel[];
	members: DiscordChannelMember[];
	presence_count: number;
};
