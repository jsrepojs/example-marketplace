<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import * as LoginForm from '$lib/components/blocks/login-form';
	import { toast } from 'svelte-sonner';

	const form = superForm(
		{ email: '', password: '' },
		{
			validators: valibotClient(LoginForm.schema),
			onResult: ({ result }) => {
				if (result.type === 'success') {
					toast.success('Posted!');
				}
			}
		}
	);
</script>

<LoginForm.Component action="?/login" {form} />
