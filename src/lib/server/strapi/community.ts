import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';
import type { CommunityUsersResponse } from '$types/community';

const endpoint = '/api/community';

export async function getCommunityMembers(query?: Pick<StrapiQuery, 'sort' | 'pagination'>) {
	const defaultQuery: Pick<StrapiQuery, 'sort' | 'pagination'> = {
		sort: ['username:asc'],
		pagination: { page: 1, pageSize: 20 },
	};
	return strapiFetch<CommunityUsersResponse>(endpoint + '/members', query ?? defaultQuery);
}
