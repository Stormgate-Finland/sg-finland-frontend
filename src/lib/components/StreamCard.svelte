<script lang="ts">
	import Image from '$components/Image.svelte';
	import { t } from '$lib/translations';

	export let stream: {
		id: number;
		thumbnailUrl?: string;
		name: string;
		title: string;
		viewers: number;
		url: string;
	};
</script>

<div class="flex h-32 gap-3">
	<div class="basis-4/12">
		<a href={stream.url} target="_blank">
			<Image
				src={stream.thumbnailUrl}
				alt="Thumbnail"
				class="aspect-video h-full max-w-full object-cover object-center"
			/>
		</a>
	</div>
	<div class="flex basis-8/12 flex-col">
		<h4>{stream.name} 🔴</h4>
		<p class="text-sm">{stream.title}</p>
		<p class="text-sm">
			<span class="font-mono font-bold">{stream.viewers}</span> viewers
		</p>
		<p class="text-sm text-primary underline underline-offset-2">
			<a target="_blank" href={stream.url}>{$t('streams.watchOn')} {new URL(stream.url).hostname}</a
			>
		</p>
	</div>
</div>
