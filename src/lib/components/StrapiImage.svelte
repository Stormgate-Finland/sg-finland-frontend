<script lang="ts">
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import { TwicImg } from '@twicpics/components/sveltekit';
	import Image from './Image.svelte';
	import { PUBLIC_TWICPICS_DOMAIN } from '$env/static/public';

	export let img: Maybe<UploadFileEntityResponse> | undefined;

	function stripHost(url?: string) {
		return url?.replace(/^https?:\/\/[^\/]*/, '') ?? '';
	}
</script>

{#if PUBLIC_TWICPICS_DOMAIN && img?.data?.attributes?.provider !== 'local'}
	<TwicImg
		{...$$restProps}
		alt={img?.data?.attributes?.alternativeText ?? ''}
		src={stripHost(img?.data?.attributes?.url)}
	></TwicImg>
{:else}
	<Image
		{...$$restProps}
		src={img?.data?.attributes?.url}
		alt={img?.data?.attributes?.alternativeText}
	/>
{/if}
