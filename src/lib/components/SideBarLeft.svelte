<script lang="ts">
	import DiscordServerWidget from '$lib/components/DiscordServerWidget.svelte';
	import DesktopNavigation from './DesktopNavigation.svelte';
</script>

<aside class="sticky top-4 hidden h-full w-64 flex-col border-r-2 border-primary py-2 pr-4 lg:flex">
	<nav class="w-full">
		<DesktopNavigation />
	</nav>
	<div class="mt-8 text-center">
		<DiscordServerWidget />
	</div>
</aside>
