import { getCommunityMembers } from '$lib/server/strapi/community';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const members = await getCommunityMembers();
	return {
		members: members,
	};
};
