import { z } from 'zod';

export const formSchema = z.object({
	code: z.string().length(6, 'validation.code.length').regex(/^\d+$/, 'validation.code.regex'),
});

export type FormSchema = typeof formSchema;
