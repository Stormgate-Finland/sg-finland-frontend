import type { Handle } from '@sveltejs/kit';
import { handle as authHandle } from './authHook';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';

const shutdownHandle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname !== '/') {
		redirect(302, '/');
	}
	return resolve(event);
};

export const handle: Handle = sequence(shutdownHandle, authHandle);
