import { schema } from '$lib/components/blocks/login-form';
import { action as login } from '$lib/components/blocks/login-form/server.js';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export async function load() {
	const form = await superValidate(valibot(schema));

	return {
		form
	};
}

export const actions = {
	login
};
