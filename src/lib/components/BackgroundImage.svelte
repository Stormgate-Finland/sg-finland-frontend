<script lang="ts">
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import bgImg from '$/assets/images/stormgate-finland-bg.jpg';
	import StrapiImage from './StrapiImage.svelte';

	export let image: Maybe<UploadFileEntityResponse> | undefined;
</script>

<div class="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-dvh w-dvw opacity-10">
	{#if image}
		<StrapiImage img={image} class="fade-to-background h-full w-full object-cover" loading="lazy" />
	{:else}
		<img src={bgImg} class="fade-to-background h-full w-full object-cover" alt="" loading="lazy" />
	{/if}
</div>
