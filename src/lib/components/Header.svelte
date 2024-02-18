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
	</div>

	<ThemeToggleButton className="absolute right-4 top-4 h-8 hidden lg:flex" />
</header>

<style>
	.my-filter {
		filter: drop-shadow(2px 2px 2px #666) drop-shadow(-2px -2px 2px #666);
	}
</style>
