import type { LadderPlayer } from '$types/ladder';

export async function GET({ setHeaders }) {
	setHeaders({
		'cache-control': 'max-age=60',
	});

	const req = await fetch(
		'https://api.stormgate.untapped.gg/api/v1/leaderboard?match_mode=ranked_1v1',
	);
	const data: LadderPlayer[] = (await req.json()) ?? [];

	const finnishPlayers = ['Mixu', 'SacredCoconut', 'Luolis', 'Blodir'];
	const finnishData: LadderPlayer[] = [];
	data.forEach((player, index) => {
		if (finnishPlayers.includes(player.playerName)) {
			finnishData.push({ ...player, rank: index + 1 });
		}
	});

	return new Response(JSON.stringify(finnishData), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
