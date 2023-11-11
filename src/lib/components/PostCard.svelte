<script lang="ts">
	import type { PostEntity } from '$types/generated/strapi';
	import Image from '$components/Image.svelte';

	export let post: PostEntity;
</script>

<div class="flex flex-col gap-3">
	<div>
		<a href={`/posts/${post.attributes?.slug}`}>
			<Image
				src={post.attributes?.image.data?.attributes?.url}
				class="h-48 w-full object-cover object-center"
			/>
		</a>
	</div>
	<div class="flex flex-col gap-3">
		<h4>{post.attributes?.title}</h4>
		<p class="font-bold">{post.attributes?.ingress}</p>
		<div>
			<a class="underline underline-offset-2" href={`/posts/${post.attributes?.slug}`}>Read more</a>
		</div>
	</div>
</div>
