<script lang="ts">
	import { isDarkMode } from '$lib/utils';
	import DarkModeIcon from '$assets/icons/dark-theme.svg?component';
	import clsx, { type ClassValue } from 'clsx';
	import { Button } from '$components/ui/button';

	export let className: ClassValue = undefined;

	let themeDark = isDarkMode();

	function toggle() {
		themeDark = window.document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', themeDark ? 'dark' : 'light');
	}
</script>

<svelte:head>
	<script>
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	</script>
</svelte:head>

<Button
	variant="outline"
	on:click={toggle}
	class={clsx(className, 'items-center gap-2 rounded-md text-xs uppercase')}
>
	<DarkModeIcon width="18" height="18" class="text-foreground" />
	<span class="max-sm:hidden">
		{#if themeDark}
			Light Mode
		{:else}
			Dark Mode
		{/if}
	</span>
</Button>
