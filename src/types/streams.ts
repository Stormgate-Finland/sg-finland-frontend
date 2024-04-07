export type StrapiStreamsLiveResponse = {
	id: number;
	title: string;
	externalId: string;
	provider: string;
	url: string;
	live: {
		title: string;
		viewers: number;
		thumbnailUrl: string;
	};
};
