import type { UsersPermissionsMe, UsersPermissionsUserEntity } from '$types/generated/strapi';
import { strapiFetch, strapiMutation } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';
import type { StrapiUsersDownloadOwnDataResponse, UserSessionResponse } from '$types/users';

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
	return strapiFetch<UsersPermissionsMe>(`${endpoint}/me`, undefined, authToken);
}

export async function getSession(token: string) {
	return strapiMutation<UserSessionResponse>(`${endpoint}/session`, 'POST', { token });
}

export async function updateMe(body: unknown, authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(`${endpoint}/me`, 'PUT', body, authToken);
}

export async function updateEmail(body: unknown, authToken: string) {
	return strapiMutation<{ success: boolean }>(
		`${endpoint}/me/update-email`,
		'POST',
		body,
		authToken,
	);
}

export async function verifyEmail(body: unknown, authToken: string) {
	return strapiMutation<{ success: boolean }>(
		`${endpoint}/me/verify-email`,
		'POST',
		body,
		authToken,
	);
}

export async function deleteMe(authToken: string) {
	return strapiMutation<UsersPermissionsUserEntity>(
		`${endpoint}/me`,
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

export async function getOwnData(authToken: string) {
	return strapiFetch<StrapiUsersDownloadOwnDataResponse>(
		`${endpoint}/me/download-data`,
		undefined,
		authToken,
	);
}
