import { strapiFetch } from './utils';
import type { StrapiQuery } from '$types/strapiQuery';
import type { CommunityUser, CommunityMembersResponse } from '$types/community';

const endpoint = '/api/community';

export async function getCommunityMembers(query?: Pick<StrapiQuery, 'sort' | 'pagination'>) {
	const defaultQuery: Pick<StrapiQuery, 'sort' | 'pagination'> = {
		sort: ['username:asc'],
		pagination: { page: 1, pageSize: 20 },
	};
	return strapiFetch<CommunityMembersResponse>(endpoint + '/members', query ?? defaultQuery);
}

export async function getNewestCommunityMember() {
	return strapiFetch<CommunityUser>(endpoint + '/members/newest');
}
