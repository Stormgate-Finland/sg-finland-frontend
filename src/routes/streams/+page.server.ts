import { getLiveStreams, getStreams } from '$lib/server/strapi/streams';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const pageSize = Number(url.searchParams.get('limit')) || 20;

	const [liveStreams = [], streams] = await Promise.all([
		getLiveStreams(),
		getStreams({
			populate: { tag: { fields: ['name'] } },
			pagination: { page, pageSize },
			sort: ['title:asc'],
		}),
	]);

	return {
		liveStreams,
		streams: {
			...streams,
			...(liveStreams?.length > 0 && {
				data: streams.data.filter((stream) => !liveStreams.some((s) => s.id === Number(stream.id))),
			}),
		},
	};
};
