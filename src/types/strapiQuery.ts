enum Operator {
	Eq = '$eq',
	Eqi = '$eqi',
	Ne = '$ne',
	Nei = '$nei',
	Lt = '$lt',
	Lte = '$lte',
	Gt = '$gt',
	Gte = '$gte',
	In = '$in',
	NotIn = '$notIn',
	Contains = '$contains',
	NotContains = '$notContains',
	Containsi = '$containsi',
	NotContainsi = '$notContainsi',
	Null = '$null',
	NotNull = '$notNull',
	Between = '$between',
	StartsWith = '$startsWith',
	StartsWithi = '$startsWithi',
	EndsWith = '$endsWith',
	EndsWithi = '$endsWithi',
	Or = '$or',
	And = '$and',
	Not = '$not',
}

type StrapiQueryFilters = {
	[key: string]: {
		[key in Operator]?: string | number | boolean | string[] | number[];
	};
};

export interface StrapiQuery {
	sort?: string[];
	filters?: StrapiQueryFilters;
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
