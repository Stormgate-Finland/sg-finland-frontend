<script lang="ts">
	import { t } from '$/lib/translations';
	import StreamCard from '$lib/components/StreamCard.svelte';
	import PageHead from '$components/PageHead.svelte';

	export let data;
	const { liveStreams } = data;
</script>

<PageHead title={$t('streams.heading')} description={$t('streams.pageDescription')} />

<div class="space-y-6">
	<h1>{$t('streams.heading')}</h1>

	{#if liveStreams?.length <= 0}
		<p>{$t('streams.noLiveStreams')}</p>
	{:else}
		<div class="space-y-6">
			{#each liveStreams as stream}
				<StreamCard {stream} />
			{/each}
		</div>
	{/if}

	<p class="markdown">{@html $t('streams.moreStreamsInTwitch')}</p>
</div>
