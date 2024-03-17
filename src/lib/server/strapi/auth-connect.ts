import { PUBLIC_CMS_URL } from '$env/static/public';
import type { UsersPermissionsLoginPayload } from '$types/generated/strapi';

const endpoint = '/api/auth-connect';

export const loginCallback = async (provider: string, code: string) => {
	if (!provider || !code) {
		throw new Error('Missing provider or access code');
	}
	const res = await fetch(`${PUBLIC_CMS_URL}${endpoint}/${provider}?code=${code}`);
	return (await res.json()) as UsersPermissionsLoginPayload;
};
