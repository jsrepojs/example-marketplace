<script lang="ts">
	import { ThemeSelector } from '../ui/theme-selector';
	import * as Icons from '$lib/components/icons';
	import { Button } from '../ui/button';
</script>

<header class="flex justify-center">
	<div class="flex w-full max-w-4xl place-items-center justify-end px-4 py-2">
		<div class="flex place-items-center gap-2">
			<Button href="https://github.com/jsrepojs/example-marketplace" size="icon" variant="outline">
				<Icons.GitHub />
			</Button>
			<ThemeSelector variant="outline" />
		</div>
	</div>
</header>
