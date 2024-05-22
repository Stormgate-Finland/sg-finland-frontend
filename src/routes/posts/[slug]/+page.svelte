<script lang="ts">
	import { t } from '$/lib/translations';
	import PageHead from '$components/PageHead.svelte';
	import PostMeta from '$components/PostMeta.svelte';
	import Image from '$lib/components/Image.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	$: ({ post } = data);
</script>

{#key post.id}
	<PageHead
		title={post.attributes?.title}
		extraTitles={[$t('posts.heading')]}
		description={post.attributes?.ingress}
		ogImage={post.attributes?.image.data?.attributes?.url}
	/>
{/key}

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
