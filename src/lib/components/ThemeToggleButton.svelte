<script lang="ts">
	import { isDarkMode } from '$lib/utils';
	import DarkModeIcon from '$assets/icons/dark-theme.svg?component';
	import clsx from 'clsx';

	export let className: clsx.ClassValue = undefined;

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

<button on:click={toggle} class={clsx(className, 'flex items-center gap-2 rounded-md text-xs')}>
	<DarkModeIcon width="18" height="18" class="text-foreground" />
	<span class="max-sm:hidden">
		{#if themeDark}
			Light Mode
		{:else}
			Dark Mode
		{/if}
	</span>
</button>

<style lang="postcss">
	button {
		background-color: theme(colors.background);
		color: theme(colors.foreground);
		border: 2px solid theme(colors.foreground);
		padding: 0.5rem;
		text-transform: uppercase;
	}
</style>
