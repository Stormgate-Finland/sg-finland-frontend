<script lang="ts">
	import type { PostEntityResponseCollection } from '$types/generated/strapi';

	export let data: PostEntityResponseCollection;
</script>

<h1>POSTS</h1>

{#each data.data as post}
	<h3>{post.attributes?.title}</h3>
	<p>{post.attributes?.body}</p>
	<p>{post.attributes?.createdAt} by {post.attributes?.author?.data?.attributes?.username}</p>
{/each}

<!-- <div>{@html data.posts[0]?.body}</div> -->
