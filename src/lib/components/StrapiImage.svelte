<script lang="ts">
	import type { Maybe, UploadFileEntityResponse } from '$types/generated/strapi';
	import Image from './Image.svelte';

	export let img: Maybe<UploadFileEntityResponse> | undefined;

	const src = img?.data?.attributes?.url.replace(/^https?:\/\/[^\/]*/, '') ?? '';
</script>

<Image {...$$restProps} {src} alt={img?.data?.attributes?.alternativeText} />
