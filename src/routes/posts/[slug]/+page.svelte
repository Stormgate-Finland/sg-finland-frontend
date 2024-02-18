<script lang="ts">
	import PostMeta from '$components/PostMeta.svelte';
	import Image from '$lib/components/Image.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<h1>{data.attributes?.title}</h1>

<PostMeta
	author={data.attributes?.author?.data?.attributes?.username}
	createdAt={data.attributes?.createdAt}
	long
/>

{#if data.attributes?.ingress}
	<div class="pt-2 font-bold">
		{data.attributes?.ingress}
	</div>
{/if}

{#if data.attributes?.image?.data?.attributes?.url}
	<Image
		src={data.attributes?.image.data?.attributes?.url}
		alt={data.attributes?.image?.data?.attributes?.alternativeText}
		class="aspect-video w-full object-cover object-center py-4"
	/>
{/if}

<div class="markdown">
	<SvelteMarkdown source={data.attributes?.body} />
</div>
