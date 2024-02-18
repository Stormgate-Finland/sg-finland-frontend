import { getPosts } from '$lib/server/strapi/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const pageSize = Number(url.searchParams.get('limit')) || 10;

	const posts = await getPosts({
		populate: {
			author: { fields: ['username'] },
			tag: { fields: ['name'] },
			image: { fields: ['url', 'alternativeText'] },
		},
		pagination: { page, pageSize },
		sort: ['publishedAt:desc'],
	});
	return { posts };
};
