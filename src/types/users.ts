import type { UserConnectionEntity, UsersPermissionsUserEntity } from './generated/strapi';

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
    },
    avatarUrl?: string;
  };