export enum LadderFaction {
	Infernal = 'infernals',
	Vanguard = 'vanguard',
	Faction3 = 'faction_3',
	Random = 'random',
}

export enum LadderLeague {
	Aspirant = 'aspirant',
	Bronze = 'bronze',
	Silver = 'silver',
	Gold = 'gold',
	Platinum = 'platinum',
	Diamond = 'diamond',
	Master = 'master',
	Grandmaster = 'grandmaster',
}

export type LadderTier = 1 | 2 | 3;

export type LadderPlayer = {
	race: LadderFaction;
	points: number;
	wins: number;
	losses: number;
	ties: number;
	league: LadderLeague;
	tier: LadderTier | null;
	mmr: number;
	playerName: string;
	profileId: string;
	rank?: number;
};
