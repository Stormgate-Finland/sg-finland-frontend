<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<h1>POSTS</h1>

{#each data.data as post}
	<h3>{post.attributes?.title}</h3>
	<div class="markdown">
		<SvelteMarkdown source={post.attributes?.body} />
	</div>
	<p>{post.attributes?.createdAt} by {post.attributes?.author?.data?.attributes?.username}</p>
	<Image
		class="w-full"
		src={post.attributes?.image.data?.attributes?.url}
		alt={post.attributes?.image.data?.attributes?.alternativeText}
	/>
{/each}
