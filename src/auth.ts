import { SvelteKitAuth } from '@auth/sveltekit';
import Discord from '@auth/sveltekit/providers/discord';
import { AUTH_DISCORD_ID, AUTH_DISCORD_SECRET } from '$env/static/private';
import {
	redirect,
	type Handle,
	type RequestEvent,
	type ResolveOptions,
	type MaybePromise,
} from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function authorization({
	event,
	resolve,
}: {
	event: RequestEvent;
	resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) {
	// Protect any routes under /authenticated
	if (event.url.pathname === '/me') {
		const session = await event.locals.auth();
		if (!session) {
			throw redirect(303, '/login');
		}
	}
	return resolve(event);
}

export const {
	handle: authHandle,
	signIn,
	signOut,
} = SvelteKitAuth({
	providers: [Discord({ clientId: AUTH_DISCORD_ID, clientSecret: AUTH_DISCORD_SECRET })],
});

export const handle: Handle = sequence(authHandle, authorization);
