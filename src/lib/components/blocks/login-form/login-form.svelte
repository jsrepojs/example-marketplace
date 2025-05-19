<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { type SuperForm } from 'sveltekit-superforms';
	import { type LoginFormSchema } from './schema';
	import * as Card from '$lib/components/ui/card';

	type Props = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		form: SuperForm<LoginFormSchema, any>;
		action?: string;
	};

	let { form, action }: Props = $props();

	const { form: formData, submitting, enhance } = form;
</script>

<form method="POST" {action} use:enhance style="display: contents;">
	<Card.Root class="w-full max-w-xs">
		<Card.Header>
			<Card.Title>Sign in to acme.com</Card.Title>
			<Card.Description>Login to continue.</Card.Description>
		</Card.Header>
		<Card.Content class="flex w-full flex-col gap-2">
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input
							{...props}
							type="email"
							placeholder="johndoe@example.com"
							bind:value={$formData.email}
						/>
					{/snippet}
				</Form.Control>
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<Input {...props} type="password" bind:value={$formData.password} />
					{/snippet}
				</Form.Control>
			</Form.Field>
		</Card.Content>
		<Card.Footer>
			<Form.Button class="w-full" loading={$submitting}>Login</Form.Button>
		</Card.Footer>
	</Card.Root>
</form>
