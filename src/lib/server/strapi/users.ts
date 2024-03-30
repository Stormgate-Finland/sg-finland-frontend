import type {
	UsersPermissionsMe,
	UsersPermissionsUserEntityResponse,
	UsersPermissionsUserEntityResponseCollection,
} from '$types/generated/strapi';
import { strapiFetch, strapiMutation } from './utils';
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

export async function updateUser(id: string, body: unknown, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntityResponse>(
		`${endpoint}/${id}`,
		'PUT',
		body,
		authToken,
	);
}

export async function deleteUser(id: string, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntityResponse>(
		`${endpoint}/${id}`,
		'DELETE',
		undefined,
		authToken,
	);
}
