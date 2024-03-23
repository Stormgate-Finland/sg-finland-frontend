import type { Handle, RequestEvent } from '@sveltejs/kit';
import { getMe } from './lib/server/strapi/users';

// Attach authorization to each server request (role may have changed)
async function attachUserToRequestEvent(session: string, event: RequestEvent) {
	const user = await getMe(session);
	if (user?.username) {
		event.locals.user = user;
	}
}

// Invoked for each endpoint called and initially for SSR router
export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const session = cookies.get('session');

	// before endpoint or page is called
	if (session) {
		await attachUserToRequestEvent(session, event);
	}

	if (!event.locals.user) {
		cookies.delete('session', { path: '/' });
	}

	const response = await resolve(event);

	// after endpoint or page is called

	return response;
};
