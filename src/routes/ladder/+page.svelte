<script lang="ts">
	import { t } from '$/lib/translations';
	import PageHead from '$components/PageHead.svelte';
	import FactionIcon from '$lib/components/FactionIcon.svelte';
	import LeagueImage from '$lib/components/LeagueImage.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	export let data;
</script>

<PageHead title={$t('ladder.heading')} description={$t('ladder.pageDescription')} />

<div class="space-y-6">
	<h1>{$t('ladder.heading')}</h1>

	<p>{$t('ladder.comingSoon')}</p>

	{#await data.ladderPlayers}
		<div class="flex gap-4">
			<LoadingSpinner />
			<p>{$t('ui.loading')}</p>
		</div>
	{:then ladderPlayers}
		{#if ladderPlayers.length <= 0}
			<p>{$t('ladder.noPlayers')}</p>
		{:else}
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="text-right">{$t('ladder.rank')}</Table.Head>
						<Table.Head>{$t('ladder.player')}</Table.Head>
						<Table.Head>{$t('ladder.league')}</Table.Head>
						<Table.Head class="text-right">{$t('ladder.points')}</Table.Head>
						<Table.Head class="text-right">{$t('ladder.mmr')}</Table.Head>
						<Table.Head>{$t('ladder.stats')}</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each ladderPlayers as player}
						<Table.Row>
							<Table.Cell class="text-right font-mono">{player.rank ?? ''}</Table.Cell>
							<Table.Cell>
								<div class="flex items-center gap-2">
									<FactionIcon faction={player.race} />
									<span class="font-bold">{player.playerName}</span>
								</div>
							</Table.Cell>
							<Table.Cell class="capitalize">
								<div class="flex items-center gap-1">
									<LeagueImage league={player.league} tier={player.tier} />
									{player.league}
								</div>
							</Table.Cell>
							<Table.Cell class="text-right font-mono">{Math.round(player.points)}</Table.Cell>
							<Table.Cell class="text-right font-mono">{Math.round(player.mmr)}</Table.Cell>
							<Table.Cell class="font-mono">{`${player.wins}-${player.losses}`}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		{/if}
	{:catch error}
		<p>Error loading ladder: {error.message}</p>
	{/await}

	<p class="markdown">{@html $t('ladder.inTheMeanTime')}</p>
</div>
