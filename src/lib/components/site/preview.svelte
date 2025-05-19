<script lang="ts">
	import { Snippet } from "$lib/components/ui/snippet";

	type Props = {
		/** i.e. `ui/button` */
		blockSpecifier: string;
        children: import('svelte').Snippet;
	};

	let { blockSpecifier, children }: Props = $props();
</script>

<div class="flex flex-col gap-2">
	<div class="flex place-items-center justify-between">
		<span class="font-mono px-2 py-1 bg-accent rounded-md">{blockSpecifier}</span>
        <Snippet text="jsrepo add @example/marketplace/{blockSpecifier}" class="w-fit"/>
	</div>
	<div class="border-border bg-background p-6 w-full rounded-xl border flex justify-center place-items-center">
        {@render children()}
    </div>
</div>
