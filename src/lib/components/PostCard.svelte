<script lang="ts">
	import type { PostEntity } from '$types/generated/strapi';
	import Image from '$components/Image.svelte';
	import PostMeta from './PostMeta.svelte';
	import ReadMoreLink from './ReadMoreLink.svelte';

	export let post: PostEntity;
</script>

<div class="flex h-32 gap-3">
	<div class="basis-4/12">
		<a href={`/posts/${post.attributes?.slug}`}>
			<Image
				src={post.attributes?.image.data?.attributes?.url}
				alt={post.attributes?.image?.data?.attributes?.alternativeText}
				class="aspect-video h-full max-w-full object-cover object-center"
			/>
		</a>
	</div>
	<div class="flex basis-8/12 flex-col">
		<a href={`/posts/${post.attributes?.slug}`}>
			<h5>{post.attributes?.title}</h5>
		</a>
		<div class="pb-2 text-sm">
			<PostMeta
				author={post.attributes?.author?.data?.attributes?.username}
				createdAt={post.attributes?.createdAt}
			/>
		</div>
		{#if post.attributes?.ingress}
			<div class="line-clamp-1 text-ellipsis text-sm sm:line-clamp-2">
				{post.attributes.ingress}
			</div>
		{/if}
		<div class="text-sm">
			<ReadMoreLink href={`/posts/${post.attributes?.slug}`} />
		</div>
	</div>
</div>
