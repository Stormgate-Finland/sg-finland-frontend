<script lang="ts">
	import type { PostEntityResponseCollection } from '$types/generated/strapi';
	import Image from '$lib/components/Image.svelte';

	export let data: PostEntityResponseCollection;
</script>

<h1>POSTS</h1>

{#each data.data as post}
	<h3>{post.attributes?.title}</h3>
	<p>{post.attributes?.body}</p>
	<p>{post.attributes?.createdAt} by {post.attributes?.author?.data?.attributes?.username}</p>
	<Image
		class="max-w-6xl"
		src={post.attributes?.image.data?.attributes?.url}
		alt={post.attributes?.image.data?.attributes?.alternativeText}
	/>
{/each}

<!-- <div>{@html data.posts[0]?.body}</div> -->
