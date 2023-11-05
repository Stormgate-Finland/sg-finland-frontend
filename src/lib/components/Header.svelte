<script lang="ts">
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import Image from './Image.svelte';
	import ThemeToggleButton from './ThemeToggleButton.svelte';

	export let logo: Maybe<UploadFileEntityResponse> | undefined;
</script>

<header class="flex h-24 justify-center p-1 sm:mb-2 sm:p-2 md:mb-8 md:p-4">
	{#if logo}
		<a href="/" class="max-w-[60%]">
			<Image
				src={logo.data?.attributes?.url}
				alt={logo.data?.attributes?.alternativeText}
				class="h-full w-full"
			/>
		</a>
	{/if}

	<ThemeToggleButton className="absolute right-4 top-4 h-8" />
</header>
