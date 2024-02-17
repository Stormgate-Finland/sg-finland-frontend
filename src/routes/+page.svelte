<script lang="ts">
	import PageHead from '$components/PageHead.svelte';
	import PostCard from '$components/PostCard.svelte';
	import PostCardBig from '$components/PostCardBig.svelte';

	export let data;

	const [firstPost] = data.posts;
	const otherPosts = data.posts.slice(1);
</script>

<PageHead description="Finnish community site for Stormgate, a game by Frost Giant Studios." />

<div class="flex flex-wrap gap-8">
	{#if firstPost}
		<PostCardBig post={firstPost} />
	{/if}

	<hr />
	<div class="flex flex-col gap-8">
		{#each otherPosts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>
