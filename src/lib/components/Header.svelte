<script lang="ts">
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import Image from './Image.svelte';
	import ThemeToggleButton from './ThemeToggleButton.svelte';

	export let logo: Maybe<UploadFileEntityResponse> | undefined;
</script>

<header class="flex h-16 justify-center p-2 sm:mb-2 sm:p-1 md:mb-8 md:p-2 lg:h-24">
	<div class="my-filter flex w-full justify-start sm:justify-center">
		{#if logo}
			<a href="/" class="h-full w-[min(_80%,420px)]">
				<Image
					src={logo.data?.attributes?.url}
					alt={logo.data?.attributes?.alternativeText}
					class="h-full w-full"
				/>
			</a>
		{/if}
		<span class="translate-x-[-90%] rotate-90 font-mono text-xs text-primary sm:text-sm lg:text-lg"
			>beta</span
		>
	</div>

	<ThemeToggleButton class="absolute right-4 top-4 hidden h-8 lg:flex" />
</header>

<style>
	.my-filter {
		filter: drop-shadow(2px 2px 2px #666) drop-shadow(-2px -2px 2px #666);
	}
</style>
