import { stringify } from 'qs';
import { PUBLIC_CMS_URL } from '$env/static/public';
import { CMS_API_KEY } from '$env/static/private';
import { FilterOperator, type StrapiMutationResponse, type StrapiQuery } from '$types/strapiQuery';

export function strapiQuery<T>(query?: StrapiQuery<T>) {
	if (!query) return '';
	const formatQuery = {
		...query,
		...(query?.filters && { filters: formatFilterKeys<T>(query.filters) }),
	};
	return `?${stringify(formatQuery, { encode: false })}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatFilterKeys<T>(obj: any) {
	if (typeof obj === 'object' && obj) {
		for (const key in obj) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				obj[key] = formatFilterKeys(obj[key]);
			} else {
				try {
					if (key in FilterOperator) {
						const newKey = '$' + key;
						obj[newKey] = obj[key];
						delete obj[key];
					}
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error(e);
				}
			}
		}
	}
	return obj as T;
}

export async function strapiFetch<T, S = unknown>(
	endpoint: string,
	query?: StrapiQuery<S>,
	authToken = CMS_API_KEY,
) {
	const qs = strapiQuery<S>(query);
	const headers = authToken ? { authorization: `Bearer ${authToken}` } : undefined;
	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}${qs}`, { headers });
	const data = await res.json();
	return data as T;
}

type Method = 'POST' | 'PUT' | 'DELETE';

export async function strapiMutation<T>(
	endpoint: string,
	method: Method = 'POST',
	body?: unknown,
	authToken = CMS_API_KEY,
) {
	const headers = {
		'Content-Type': 'application/json',
		...(authToken && { authorization: `Bearer ${authToken}` }),
	};

	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}`, {
		headers,
		method,
		body: JSON.stringify({ data: body }),
	});
	if (!res.ok) {
		return null;
	}

	const data = await res.json();
	return data as StrapiMutationResponse<T>;
}
