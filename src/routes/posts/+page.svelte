<script lang="ts">
	import Pagination from '$components/Pagination.svelte';
	import PostCard from '$components/PostCard.svelte';

	export let data;
</script>

<div class="space-y-6">
	<h1>News</h1>

	{#each data.data as post}
		<PostCard {post} />
	{/each}

	{#if data.meta.pagination.total > 1}
		<div class="flex justify-end">
			<Pagination pagination={data.meta.pagination} />
		</div>
	{/if}
</div>
