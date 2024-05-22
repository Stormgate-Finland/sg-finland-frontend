<script lang="ts">
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import LoadingLine from './LoadingLine.svelte';
	import StrapiImage from './StrapiImage.svelte';
	import ThemeToggleButton from './ThemeToggleButton.svelte';

	export let logo: Maybe<UploadFileEntityResponse> | undefined;
</script>

<header class="mb-2 flex h-16 justify-center p-2 sm:mb-4 sm:p-1 md:mb-8 md:p-2 lg:h-24">
	<div class="flex w-full justify-start sm:justify-center">
		{#if logo}
			<div class="h-full w-[min(_80%,420px)] flex-col">
				<a href="/" class="my-filter">
					<StrapiImage img={logo} class="h-full w-full" />
				</a>

				{#if $navigating}
					<div in:fade={{ delay: 500, duration: 300 }} out:fade>
						<LoadingLine class="mx-[3%] h-[2px] md:mt-2 md:h-[3px]" />
					</div>
				{/if}
			</div>
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
