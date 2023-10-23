export interface StrapiQuery {
	sort?: string[];
	filters?: {
		title?: {
			$eq?: string;
		};
	};
	populate?:
		| {
				[key: string]: {
					fields?: string[];
				};
		  }
		| '*';
	fields?: string[];
	pagination?: {
		pageSize?: number;
		page?: number;
	};
	publicationState?: 'live' | 'preview';
	locale?: string[];
}
