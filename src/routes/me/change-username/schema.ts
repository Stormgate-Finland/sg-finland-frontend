import { z } from 'zod';

export const formSchema = z.object({
	username: z
		.string()
		.min(3, 'validation.username.min')
		.max(32, 'validation.username.max')
		.regex(/^[a-zöäåA-ZÖÄÅ0-9_-]+$/, 'validation.username.regex'),
});

export type FormSchema = typeof formSchema;
