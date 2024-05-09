<script lang="ts">
	import type { LadderLeague, LadderTier } from '$types/ladder';

	import Aspirant1 from '$assets/images/ladder/leagues/aspirant-1.png';
	import Aspirant2 from '$assets/images/ladder/leagues/aspirant-2.png';
	import Aspirant3 from '$assets/images/ladder/leagues/aspirant-3.png';
	import Bronze1 from '$assets/images/ladder/leagues/bronze-1.png';
	import Bronze2 from '$assets/images/ladder/leagues/bronze-2.png';
	import Bronze3 from '$assets/images/ladder/leagues/bronze-3.png';
	import Diamond1 from '$assets/images/ladder/leagues/diamond-1.png';
	import Diamond2 from '$assets/images/ladder/leagues/diamond-2.png';
	import Diamond3 from '$assets/images/ladder/leagues/diamond-3.png';
	import Gold1 from '$assets/images/ladder/leagues/gold-1.png';
	import Gold2 from '$assets/images/ladder/leagues/gold-2.png';
	import Gold3 from '$assets/images/ladder/leagues/gold-3.png';
	import Grandmaster from '$assets/images/ladder/leagues/grandmaster.png';
	import Master1 from '$assets/images/ladder/leagues/master-1.png';
	import Master2 from '$assets/images/ladder/leagues/master-2.png';
	import Master3 from '$assets/images/ladder/leagues/master-3.png';
	import Platinum1 from '$assets/images/ladder/leagues/platinum-1.png';
	import Platinum2 from '$assets/images/ladder/leagues/platinum-2.png';
	import Platinum3 from '$assets/images/ladder/leagues/platinum-3.png';
	import Silver1 from '$assets/images/ladder/leagues/silver-1.png';
	import Silver2 from '$assets/images/ladder/leagues/silver-2.png';
	import Silver3 from '$assets/images/ladder/leagues/silver-3.png';
	import Unranked from '$assets/images/ladder/leagues/unranked.png';

	const leagueImages = {
		'aspirant-1': Aspirant1,
		'aspirant-2': Aspirant2,
		'aspirant-3': Aspirant3,
		'bronze-1': Bronze1,
		'bronze-2': Bronze2,
		'bronze-3': Bronze3,
		'diamond-1': Diamond1,
		'diamond-2': Diamond2,
		'diamond-3': Diamond3,
		'gold-1': Gold1,
		'gold-2': Gold2,
		'gold-3': Gold3,
		grandmaster: Grandmaster,
		'master-1': Master1,
		'master-2': Master2,
		'master-3': Master3,
		'platinum-1': Platinum1,
		'platinum-2': Platinum2,
		'platinum-3': Platinum3,
		'silver-1': Silver1,
		'silver-2': Silver2,
		'silver-3': Silver3,
		unranked: Unranked,
	};

	export let league: LadderLeague;
	export let tier: LadderTier | null;

	function getLeagueImage(league: LadderLeague, tier: LadderTier | null) {
		if (league === 'grandmaster') {
			return leagueImages.grandmaster;
		}
		if (tier) {
			return leagueImages[`${league}-${tier}`];
		}

		return leagueImages.unranked;
	}
</script>

<img src={getLeagueImage(league, tier)} alt={league} class="h-8 w-8" />
