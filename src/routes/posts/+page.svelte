<script lang="ts">
	import Pagination from '$components/Pagination.svelte';
	import PostCard from '$components/PostCard.svelte';

	export let data;
	const { posts } = data;
</script>

<div class="space-y-6">
	<h1>News</h1>

	{#each posts.data as post}
		<PostCard {post} />
	{/each}

	{#if posts.meta.pagination.total > 1}
		<div class="flex justify-end">
			<Pagination pagination={posts.meta.pagination} />
		</div>
	{/if}
</div>
