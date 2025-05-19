import { fail, type Action } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { schema } from './schema';

export const action: Action = async ({ request }) => {
	const form = await superValidate(request, valibot(schema));

	if (!form.valid) {
		return fail(400, { form });
	}

	// implement your own custom logic here

	return {
		form
	};
};
