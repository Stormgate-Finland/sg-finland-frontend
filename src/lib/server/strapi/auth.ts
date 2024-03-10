import type { UsersPermissionsLoginPayload } from '$types/generated/strapi';
import { strapiFetch } from './utils';

const endpoint = '/api/auth';

export const loginCallback = async (provider: string, accessToken: string) => {
	if (!provider || !accessToken) {
		throw new Error('Missing provider or access token');
	}
	const data = await strapiFetch<UsersPermissionsLoginPayload>(
		`${endpoint}/${provider}/callback?access_token=${accessToken}`,
		undefined,
		undefined,
	);
	return data;
};
