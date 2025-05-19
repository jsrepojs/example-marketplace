import * as v from 'valibot';

export const schema = v.object({
	email: v.pipe(v.string(), v.email()),
	password: v.string()
});

export type LoginFormSchema = v.InferOutput<typeof schema>;
