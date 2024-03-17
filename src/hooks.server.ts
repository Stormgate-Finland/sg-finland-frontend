import type { Handle } from '@sveltejs/kit';
import { handle as authHandle } from './authHook';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = sequence(authHandle);
