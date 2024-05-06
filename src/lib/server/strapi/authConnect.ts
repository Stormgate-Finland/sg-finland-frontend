import { PUBLIC_APP_URL, PUBLIC_CMS_URL } from '$env/static/public';
import type { UsersPermissionsLoginPayload } from '$types/generated/strapi';
import { strapiFetch, strapiMutation } from './utils';

const endpoint = '/api/auth-connect';

export const loginCallback = async (provider: string, code: string) => {
	if (!provider || !code) {
		throw new Error('Missing provider or access code');
	}
	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}/${provider}?code=${code}`);
	return (await res.json()) as UsersPermissionsLoginPayload;
};

export const getRedirectUrl = async (provider: string) => {
	if (!provider) {
		throw new Error('Missing provider');
	}
	const query = new URLSearchParams({
		realm: PUBLIC_APP_URL,
		returnUrl: `${PUBLIC_APP_URL}/auth/callback/${provider}`,
	});
	const result = await strapiFetch<{ redirectUrl: string }>(
		`${endpoint}/${provider}/redirect?${query.toString()}`,
	);
	return result.redirectUrl;
};

export const connectSteam = async (url: string, authToken: string) => {
	if (!url) {
		throw new Error('Missing url');
	}
	const provider = 'steam';
	const realm = PUBLIC_APP_URL;
	const returnUrl = `${PUBLIC_APP_URL}/auth/callback/${provider}`;
	const result = await strapiMutation<{ success: boolean }>(
		`${endpoint}/${provider}`,
		'POST',
		{
			url,
			realm,
			returnUrl,
		},
		authToken,
	);
	return result && !result.error;
};
