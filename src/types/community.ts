import type { Pagination, UserConnection, UsersPermissionsUser } from './generated/strapi';

export type CommunityUserConnection = { id: number } & Pick<
	UserConnection,
	'provider' | 'externalName' | 'externalId'
>;

export type CommunityUser = { id: number } & Pick<
	UsersPermissionsUser,
	'username' | 'avatarUrl' | 'faction' | 'createdAt'
> & {
		userConnections: CommunityUserConnection[];
	};

export type CommunityMembersResponse = {
	data: CommunityUser[];
	meta: {
		pagination: Pagination;
	};
};
