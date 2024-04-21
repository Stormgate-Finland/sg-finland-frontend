import { z } from 'zod';

export const formSchema = z.object({
	id: z.number().array(),
	public: z.boolean().array(),
});

export type FormSchema = typeof formSchema;
