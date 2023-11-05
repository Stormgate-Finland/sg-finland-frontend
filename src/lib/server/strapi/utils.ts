import { stringify } from 'qs';
import { PUBLIC_CMS_URL } from '$env/static/public';
import type { StrapiQuery } from '$types/strapiQuery';

export function strapiQuery(query?: StrapiQuery) {
	return `?${stringify(query, { encode: false })}`;
}

export async function strapiFetch<T>(
	endpoint: string,
	query?: StrapiQuery,
	defaultQuery?: StrapiQuery,
) {
	const qs = strapiQuery(query ?? defaultQuery);
	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}${qs}`);
	const data = await res.json();
	return data as T;
}
