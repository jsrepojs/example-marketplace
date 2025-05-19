<script lang="ts">
	import Header from '$lib/components/site/header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
	import '@fontsource-variable/geist-mono';
	import '@fontsource-variable/inter';
	import { ModeWatcher } from 'mode-watcher'

	let { children } = $props();
</script>

<Toaster/>
<ModeWatcher/>
<Header/>
{@render children()}
