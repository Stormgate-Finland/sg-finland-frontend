import { stringify } from 'qs';
import { PUBLIC_CMS_URL } from '$env/static/public';
import { CMS_API_KEY } from '$env/static/private';
import type { StrapiQuery } from '$types/strapiQuery';

export function strapiQuery(query?: StrapiQuery) {
	return `?${stringify(query, { encode: false })}`;
}

export async function strapiFetch<T>(endpoint: string, query?: StrapiQuery) {
	const qs = strapiQuery(query);
	const headers = CMS_API_KEY ? { authorization: `Bearer ${CMS_API_KEY}` } : undefined;
	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}${qs}`, { headers });
	const data = await res.json();
	return data as T;
}
