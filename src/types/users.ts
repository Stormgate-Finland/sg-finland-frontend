import {
	Enum_Userspermissionsuser_Faction,
	type UserConnectionEntity,
	type UsersPermissionsUserEntity,
} from './generated/strapi';

export type StrapiUsersDownloadOwnDataResponse = {
	user: UsersPermissionsUserEntity;
	connections: UserConnectionEntity[];
};

export type UserSessionResponse = {
	id: number;
	username: string;
	email?: string;
	confirmed?: boolean;
	blocked?: boolean;
	role?: {
		id: number;
		name: string;
	};
	avatarUrl?: string;
	faction?: Enum_Userspermissionsuser_Faction;
};

export const FACTIONS = {
	[Enum_Userspermissionsuser_Faction.Vanguard]: 'Vanguard',
	[Enum_Userspermissionsuser_Faction.Infernal]: 'Infernal Host',
	[Enum_Userspermissionsuser_Faction.Random]: 'Random',
};
