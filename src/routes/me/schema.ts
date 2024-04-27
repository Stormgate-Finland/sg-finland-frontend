import { z } from 'zod';

export const formSchemaChangeFaction = z.object({
	faction: z.union([
		z.literal('vanguard'),
		z.literal('infernal'),
		z.literal('random'),
		z.literal(''),
	]),
});

export type FormSchema = typeof formSchemaChangeFaction;
