<script lang="ts">
	import PostMeta from '$components/PostMeta.svelte';
	import Image from '$lib/components/Image.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	$: ({ post } = data);
</script>

<h1>{post.attributes?.title}</h1>

<PostMeta
	author={post.attributes?.author?.data?.attributes?.username}
	createdAt={post.attributes?.createdAt}
	long
/>

{#if post.attributes?.ingress}
	<div class="pt-2 font-bold">
		{post.attributes.ingress}
	</div>
{/if}

{#if post.attributes?.image?.data?.attributes?.url}
	<Image
		src={post.attributes?.image.data?.attributes?.url}
		alt={post.attributes?.image?.data?.attributes?.alternativeText}
		class="aspect-video w-full object-cover object-center py-4"
	/>
{/if}

<div class="markdown">
	<SvelteMarkdown source={post.attributes?.body} />
</div>
