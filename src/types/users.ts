import type { UserConnectionEntity, UsersPermissionsUserEntity } from './generated/strapi';

export type StrapiUsersDownloadOwnDataResponse = {
	user: UsersPermissionsUserEntity;
	connections: UserConnectionEntity[];
};
