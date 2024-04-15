import type { UsersPermissionsMe, UsersPermissionsUserEntity } from '$types/generated/strapi';
import { strapiFetch, strapiMutation } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';

const endpoint = '/api/users';

export async function getUsers(query?: StrapiQuery, authToken?: string) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<UsersPermissionsUserEntity[]>(
		endpoint,
		query ?? defaultQuery,
		authToken,
	);
}

export async function getUser(id: string | number, query?: StrapiQuery, authToken?: string) {
	const defaultQuery: StrapiQuery = { populate: '*' };
	return await strapiFetch<UsersPermissionsUserEntity>(
		endpoint + `/${id}`,
		query ?? defaultQuery,
		authToken,
	);
}

export async function getMe(authToken: string) {
	return strapiFetch<UsersPermissionsMe>(endpoint + '/me', undefined, authToken);
}

export async function updateMe(body: unknown, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(endpoint + '/me', 'PUT', body, authToken);
}

export async function deleteMe(authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(
		endpoint + '/me',
		'DELETE',
		undefined,
		authToken,
	);
}

export async function updateUser(id: string, body: unknown, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(`${endpoint}/${id}`, 'PUT', body, authToken);
}

export async function deleteUser(id: string, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(
		`${endpoint}/${id}`,
		'DELETE',
		undefined,
		authToken,
	);
}
