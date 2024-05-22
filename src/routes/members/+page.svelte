<script lang="ts">
	import PageHead from '$components/PageHead.svelte';
	import { t } from '$/lib/translations';
	import * as Table from '$lib/components/ui/table/index.js';
	import Pagination from '$lib/components/Pagination.svelte';
	import Time from 'svelte-time';
	import MemberLinks from '$lib/components/MemberLinks.svelte';
	import FactionIcon from '$lib/components/FactionIcon.svelte';
	import Avatar from '$lib/components/Avatar.svelte';

	export let data;
	const { members } = data;
</script>

<PageHead title={$t('members.heading')} description={$t('members.pageDescription')} />

<div class="space-y-6">
	<h1>{$t('members.heading')}</h1>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="pl-10">{$t('members.name')}</Table.Head>
				<Table.Head>{$t('members.faction')}</Table.Head>
				<Table.Head>{$t('members.memberSince')}</Table.Head>
				<Table.Head>{$t('members.links')}</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each members.data as member, i (i)}
				<Table.Row>
					<Table.Cell>
						<div class="flex items-center gap-2">
							<Avatar url={member.avatarUrl || ''} faction={member.faction || ''} class="h-5 w-5" />

							<span class="text-base font-bold">{member.username}</span>
						</div>
					</Table.Cell>
					<Table.Cell>
						<div class="flex items-center gap-2 capitalize">
							<FactionIcon faction={member.faction} />
							<span class="hidden sm:inline">{member.faction ?? $t('members.unkownFaction')}</span>
						</div>
					</Table.Cell>
					<Table.Cell class="font-mono">
						<Time timestamp={member.createdAt} format="D.M.YYYY" />
					</Table.Cell>
					<Table.Cell><MemberLinks userConnections={member.userConnections} /></Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>

	{#if members.meta.pagination?.total > 1}
		<div class="flex justify-end">
			<Pagination pagination={members.meta.pagination} />
		</div>
	{/if}
</div>
