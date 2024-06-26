import type { PaginationArg, PublicationState } from './generated/strapi';

export enum FilterOperator {
	eq = 'eq',
	eqi = 'eqi',
	ne = 'ne',
	nei = 'nei',
	lt = 'lt',
	lte = 'lte',
	gt = 'gt',
	gte = 'gte',
	in = 'in',
	notIn = 'notin',
	contains = 'contains',
	notContains = 'notcontains',
	containsi = 'containsi',
	notContainsi = 'notcontainsi',
	null = 'null',
	notNull = 'notnull',
	between = 'between',
	startsWith = 'startswith',
	startsWithi = 'startswithi',
	endsWith = 'endswith',
	endsWithi = 'endswithi',
	or = 'or',
	and = 'and',
	not = 'not',
}

type StrapiQueryFilters = {
	[key: string]: {
		[key in FilterOperator]?: string | number | boolean | string[] | number[];
	};
};

export type StrapiQuery<T = StrapiQueryFilters, E = void> = {
	sort?: string[];
	filters?: T;
	populate?:
		| {
				[key: string]: {
					fields?: string[];
				};
		  }
		| '*';
	fields?: (E extends void ? string : keyof E)[];
	pagination?: PaginationArg;
	publicationState?: PublicationState;
	locale?: string[];
};

export type StrapiError = {
	status: string | number; // HTTP status
	name?: string; // Strapi error name ('ApplicationError' or 'ValidationError')
	message: string; // A human readable error message
	details?: unknown; // error info specific to the error type
};

export type StrapiMutationResponse<T> =
	| (T & {
			error?: StrapiError;
	  })
	| { error?: StrapiError };
