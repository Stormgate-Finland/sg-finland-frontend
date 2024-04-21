import type {
	UserConnection,
	UserConnectionEntityResponse,
	UserConnectionEntityResponseCollection,
	UserConnectionFiltersInput,
} from '$types/generated/strapi';
import type { StrapiQuery } from '$types/strapiQuery';
import { strapiFetch, strapiMutation } from './utils';

const endpoint = '/api/user-connections';

export async function getUserConnections(
	userId: string,
	query?: StrapiQuery<UserConnectionFiltersInput>,
) {
	const defaultQuery: typeof query = {
		filters: { user: { id: { eq: userId } } },
		sort: ['provider:asc'],
	};
	return await strapiFetch<UserConnectionEntityResponseCollection, UserConnectionFiltersInput>(
		endpoint,
		query ?? defaultQuery,
	);
}

export async function getMyConnections(
	authToken: string,
	query?: StrapiQuery<UserConnectionFiltersInput>,
) {
	const defaultQuery: typeof query = {
		sort: ['provider:asc'],
	};
	return await strapiFetch<UserConnectionEntityResponseCollection, UserConnectionFiltersInput>(
		`${endpoint}/my`,
		query ?? defaultQuery,
		authToken,
	);
}

export async function getMyConnection(
	id: number,
	authToken: string,
	query?: StrapiQuery<UserConnectionFiltersInput>,
) {
	return await strapiFetch<UserConnectionEntityResponse, UserConnectionFiltersInput>(
		`${endpoint}/my/${id}`,
		query,
		authToken,
	);
}

export async function getUserConnection(id: string) {
	const query: StrapiQuery<UserConnectionFiltersInput> = {
		filters: { id: { eq: id } },
		populate: '*',
	};
	return await strapiFetch<UserConnectionEntityResponse, UserConnectionFiltersInput>(
		`${endpoint}/${id}`,
		query,
	);
}

export async function createUserConnection(data: UserConnection, authToken: string) {
	return await strapiMutation<UserConnectionEntityResponse>(endpoint, 'POST', data, authToken);
}

export async function updateUserConnection(
	id: string,
	data: UserConnection | UserConnection[],
	authToken: string,
) {
	return await strapiMutation<UserConnectionEntityResponse>(
		`${endpoint}/${id}`,
		'PUT',
		data,
		authToken,
	);
}

export async function updateMyUserConnection(
	id: string,
	data: UserConnection | UserConnection[],
	authToken: string,
) {
	return await strapiMutation<UserConnectionEntityResponse>(
		`${endpoint}/my/${id}`,
		'PUT',
		data,
		authToken,
	);
}

export async function updateMyUserConnections(
	data: { id: number; hidden: boolean }[],
	authToken: string,
) {
	return await strapiMutation<UserConnectionEntityResponseCollection>(
		`${endpoint}/my`,
		'POST',
		data,
		authToken,
	);
}

export async function deleteUserConnection(id: string, authToken: string) {
	return await strapiMutation<UserConnectionEntityResponse>(
		`${endpoint}/${id}`,
		'DELETE',
		authToken,
	);
}

export async function deleteMyConnection(id: string, authToken: string) {
	return await strapiMutation<UserConnectionEntityResponse>(
		`${endpoint}/my/${id}`,
		'DELETE',
		authToken,
	);
}
