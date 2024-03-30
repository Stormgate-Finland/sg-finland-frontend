<script lang="ts">
	import { t } from '$/lib/translations';
	import Pagination from '$components/Pagination.svelte';
	import StreamCard from '$lib/components/StreamCard.svelte';
	import StreamRow from '$lib/components/StreamRow.svelte';

	export let data;
	const { liveStreams = [], streams } = data;
</script>

<div class="space-y-6">
	<h1>{$t('streams.heading')}</h1>

	{#if !liveStreams}
		<p>{$t('streams.noLiveStreams')}</p>
	{:else}
		<div class="space-y-6">
			{#each liveStreams as stream}
				<StreamCard {stream} />
			{/each}
		</div>
	{/if}

	<h3 class="pt-4">{$t('streams.offlineStreams')}</h3>

	{#if !streams}
		<p>{$t('streams.noStreamsFound')}</p>
	{:else}
		<div class="flex flex-col gap-2">
			{#each streams?.data as stream}
				<StreamRow {stream} />
			{/each}
		</div>

		{#if streams.meta.pagination.total > 1}
			<div class="flex justify-end">
				<Pagination pagination={streams.meta.pagination} />
			</div>
		{/if}
	{/if}
</div>
