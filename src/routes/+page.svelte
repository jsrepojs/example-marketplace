<script lang="ts">
	import Preview from '$lib/components/site/preview.svelte';
	import { Link } from '$lib/components/ui/link';
	import * as Example from '$lib/components/examples';
	import * as Icons from '$lib/components/icons';
</script>

<svelte:head>
	<title>@example/marketplace</title>
</svelte:head>

<main class="flex flex-col place-items-center">
	<div class="flex w-full max-w-4xl flex-col gap-4 px-4">
		<div class="flex flex-col place-items-center gap-2 py-10">
			<Icons.Logo class="size-20" />
			<h1 class="text-center text-4xl font-bold">@example/marketplace</h1>
			<p class="text-muted-foreground max-w-2xl text-center">
				An example of how you might start monetizing your component registry with the
				<Link href="https://www.jsrepo.com">jsrepo.com</Link> marketplace.
			</p>
		</div>
		<Preview blockSpecifier="icons/logo">
			<Icons.Logo class="size-20" />
		</Preview>
		<Preview blockSpecifier="blocks/login-form">
			<Example.LoginForm />
		</Preview>
	</div>
</main>
