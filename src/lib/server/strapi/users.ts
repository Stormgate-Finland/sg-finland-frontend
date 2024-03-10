import type {
	UsersPermissionsMe,
	UsersPermissionsUserEntityResponse,
	UsersPermissionsUserEntityResponseCollection,
} from '$types/generated/strapi';
import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

const endpoint = '/api/users';

export async function getUsers(query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<UsersPermissionsUserEntityResponseCollection>(
		endpoint,
		query ?? defaultQuery,
	);
}

export async function getUser(id: string | number, query?: StrapiQuery) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<UsersPermissionsUserEntityResponse>(
		endpoint + `/${id}`,
		query ?? defaultQuery,
	);
}

export async function getMe(authToken: string) {
	return strapiFetch<UsersPermissionsMe>(endpoint + '/me', undefined, authToken);
}
