<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<h1>{data.attributes?.title}</h1>

<div>
	<SvelteMarkdown source={data.attributes?.body} />
</div>
<p>
	{data.attributes?.createdAt} by {data.attributes?.author?.data?.attributes?.username}
</p>
{#if data.attributes?.image?.data?.attributes?.url}
	<Image
		class="max-w-6xl"
		src={data.attributes?.image?.data?.attributes?.url}
		alt={data.attributes?.image?.data?.attributes?.alternativeText}
	/>
{/if}
