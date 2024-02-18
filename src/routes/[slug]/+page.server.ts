import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPage } from '$lib/server/strapi/pages';

export const load: PageServerLoad = async (event) => {
	const item = await getPage(event.params.slug);
	if (item.data) {
		return { page: item.data };
	}

	error(404, 'Not found');
};
