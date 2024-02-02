import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPost } from '$lib/server/strapi/posts';

export const load: PageServerLoad = async (event) => {
	const item = await getPost(event.params.slug);
	if (item.data) {
		return item.data;
	}

	error(404, 'Not found');
};
