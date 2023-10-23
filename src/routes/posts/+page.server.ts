import { getPosts } from '$lib/server/strapi/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await getPosts();
};
