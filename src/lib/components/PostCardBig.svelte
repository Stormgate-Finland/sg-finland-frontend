<script lang="ts">
	import type { PostEntity } from '$types/generated/strapi';
	import SvelteMarkdown from 'svelte-markdown';
	import Image from '$components/Image.svelte';
	import PostMeta from './PostMeta.svelte';
	import ReadMoreLink from './ReadMoreLink.svelte';

	export let post: PostEntity;
</script>

<div class="space-y-1">
	<h3>{post.attributes?.title}</h3>
	<PostMeta
		author={post.attributes?.author?.data?.attributes?.username}
		createdAt={post.attributes?.createdAt}
	/>
	<div class="flex gap-4">
		<div class="flex basis-7/12 flex-col gap-4">
			<div class="markdown line-clamp-5 text-ellipsis">
				<div class="font-bold">
					{post.attributes?.ingress}
				</div>
				<SvelteMarkdown source={post.attributes?.body.slice(0, 300)} />
			</div>
			<div>
				<ReadMoreLink href={`/posts/${post.attributes?.slug}`} />
			</div>
		</div>
		<div class="basis-5/12">
			<a href={`/posts/${post.attributes?.slug}`}>
				<Image
					src={post.attributes?.image.data?.attributes?.url}
					alt={post.attributes?.image.data?.attributes?.alternativeText}
					class="aspect-video w-full object-cover object-center"
				/>
			</a>
		</div>
	</div>
</div>
