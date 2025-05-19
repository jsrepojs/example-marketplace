<script lang="ts">
	import { Snippet } from '$lib/components/ui/snippet';

	type Props = {
		/** i.e. `ui/button` */
		blockSpecifier: string;
		children: import('svelte').Snippet;
	};

	let { blockSpecifier, children }: Props = $props();
</script>

<div class="flex flex-col gap-2">
	<div class="flex place-items-center justify-between">
		<span class="bg-accent rounded-md px-2 py-1 font-mono">{blockSpecifier}</span>
		<Snippet text="jsrepo add @example/marketplace/{blockSpecifier}" class="w-fit" />
	</div>
	<div
		class="border-border bg-background flex w-full place-items-center justify-center rounded-xl border p-6"
	>
		{@render children()}
	</div>
</div>
