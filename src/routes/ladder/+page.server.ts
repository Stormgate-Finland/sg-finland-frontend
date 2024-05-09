import type { LadderPlayer } from '$types/ladder';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const getLadderData = async () => {
		const res = await fetch('/api/ladder/top500');
		const data = (await res.json()) ?? [];
		return data as LadderPlayer[];
	};

	return {
		ladderPlayers: getLadderData(),
	};
};
