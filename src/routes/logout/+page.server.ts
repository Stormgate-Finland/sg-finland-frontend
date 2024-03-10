import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const session = cookies.get('session');
	if (session) {
		cookies.delete('session', { path: '/' });
	}
	locals.user = null;
};
