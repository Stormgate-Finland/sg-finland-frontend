<script lang="ts">
	import type { PostEntity } from '$types/generated/strapi';
	import SvelteMarkdown from 'svelte-markdown';
	import Image from '$components/Image.svelte';

	export let post: PostEntity;
</script>

<div class="flex gap-4">
	<div class="flex basis-7/12 flex-col gap-4">
		<h3>{post.attributes?.title}</h3>
		<p class="text-lg font-bold">{post.attributes?.ingress}</p>
		<div class="markdown line-clamp-3 text-ellipsis">
			<SvelteMarkdown source={post.attributes?.body.slice(0, 300)} />
		</div>
		<div>
			<a class="underline underline-offset-2" href={`/posts/${post.attributes?.slug}`}>Read more</a>
		</div>
	</div>
	<div class="basis-5/12">
		<a href={`/posts/${post.attributes?.slug}`}>
			<Image
				src={post.attributes?.image.data?.attributes?.url}
				class="h-64 w-full object-cover object-center"
			/>
		</a>
	</div>
</div>
