<script lang="ts">
	import type { PostEntity } from '$types/generated/strapi';
	import Image from '$components/Image.svelte';
	import PostMeta from './PostMeta.svelte';
	import ReadMoreLink from './ReadMoreLink.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let post: PostEntity;
</script>

<div class="flex h-32 gap-3">
	<div class="basis-4/12">
		<a href={`/posts/${post.attributes?.slug}`}>
			<Image
				src={post.attributes?.image.data?.attributes?.url}
				class="aspect-video w-full object-cover object-center"
			/>
		</a>
	</div>
	<div class="flex basis-8/12 flex-col gap-1">
		<h5>{post.attributes?.title}</h5>
		<div class="text-sm">
			<PostMeta
				author={post.attributes?.author?.data?.attributes?.username}
				createdAt={post.attributes?.createdAt}
			/>
		</div>
		<div class="markdown line-clamp-1 text-ellipsis text-sm">
			<SvelteMarkdown source={post.attributes?.body.slice(0, 200)} />
		</div>
		<div class="text-sm">
			<ReadMoreLink href={`/posts/${post.attributes?.slug}`} />
		</div>
	</div>
</div>
