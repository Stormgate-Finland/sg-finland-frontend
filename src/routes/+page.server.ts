import { getPosts } from '$lib/server/strapi/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getPosts({
		populate: {
			author: { fields: ['username'] },
			tag: { fields: ['name'] },
			image: { fields: ['url', 'alternativeText'] },
		},
		pagination: { page: 1, pageSize: 3 },
		sort: ['publishedAt:desc'],
	});
	return {
		posts: posts?.data ?? [],
	};
};
