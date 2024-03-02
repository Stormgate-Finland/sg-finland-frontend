import type { Handle } from '@sveltejs/kit';
import { handle as authHandle } from './auth';

export const handle: Handle = authHandle;
