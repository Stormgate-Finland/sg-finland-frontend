<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	import { Button } from '$components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { FACTIONS } from '$types/users';
	import FactionIcon from '$lib/components/FactionIcon.svelte';
	import { formSchemaChangeFaction } from './schema';
	import Avatar from '$lib/components/Avatar.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	$: ({ user } = data);

	export let data;
	const { connections, steamConnected } = data;
	const discord = connections?.find((c) => c.attributes?.provider === 'discord');
	const otherConnections = connections?.filter((c) => c.attributes?.provider !== 'discord');

	const form = superForm(data.form, {
		validators: zodClient(formSchemaChangeFaction),
	});
	const { form: formData, enhance } = form;

	$: selectedFaction = $formData.faction
		? {
				label: FACTIONS[$formData.faction] ?? '',
				value: $formData.faction,
			}
		: undefined;
</script>

<PageHead title={$t('me.heading')} />

<div class="space-y-6">
	<h1>{$t('me.heading')}</h1>

	{#if user}
		<div class="flex flex-wrap gap-x-16 gap-y-4">
			{#if user.avatarUrl}
				<Avatar url={user.avatarUrl} faction={$formData.faction} />
			{/if}

			<div class="flex flex-col gap-4">
				<div class="flex justify-between gap-4">
					<p>
						<small>{$t('me.username')}</small><br />
						<strong>{user.username ?? 'User'}</strong>
					</p>
					<Button variant="secondary" size="sm" class="self-end">
						<a href="/me/change-username">{$t('ui.change')}</a>
					</Button>
				</div>

				<div class="flex justify-between gap-4">
					<p>
						<small>{$t('me.email')}</small><br />
						<strong>{user.email}</strong>
					</p>

					<Button variant="secondary" size="sm" class="self-end">
						<a href="/me/change-email">{$t('ui.change')}</a>
					</Button>
				</div>

				<div>
					<small>{$t('me.faction')}</small><br />
					<form
						method="POST"
						action="?/changeFaction"
						class="flex justify-between gap-4"
						use:enhance
					>
						<Form.Field {form} name="faction">
							<Form.Control let:attrs>
								<Select.Root
									selected={selectedFaction}
									onSelectedChange={(v) => ($formData.faction = v?.value ?? '')}
								>
									<Select.Trigger {...attrs} class="w-[190px]">
										<Select.Value placeholder={$t('me.selectFaction')} />
									</Select.Trigger>
									<Select.Content>
										<Select.Item value={''}>{$t('me.none')}</Select.Item>
										{#each Object.entries(FACTIONS) as [id, value]}
											<Select.Item value={id}>
												<FactionIcon faction={id} class="mr-2" />
												{value}
											</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
								<input hidden bind:value={$formData.faction} name={attrs.name} />
							</Form.Control>
						</Form.Field>
						<Form.Button variant="secondary" disabled={$formData.faction === user.faction}
							>{$t('ui.save')}</Form.Button
						>
					</form>
				</div>
			</div>
		</div>

		<Button variant="secondary">
			<a href="/logout">{$t('me.logout')}</a>
		</Button>

		{#if discord}
			<div>
				<h3>{$t('me.discord')}</h3>
				<p>
					<strong>{discord.attributes?.externalName}</strong>
				</p>
			</div>
		{/if}

		{#if otherConnections}
			<div class="space-y-2">
				<h3>{$t('me.otherConnections')}</h3>
				<p>{$t('me.otherConnectionsInfo')}</p>
				<table>
					<thead>
						<tr>
							<th class="pr-4">{$t('me.provider')}</th>
							<th class="pr-4">{$t('me.username')}</th>
							<th>{$t('me.public')}</th>
						</tr>
					</thead>
					<tbody>
						{#each otherConnections as connection (connection.id)}
							<tr>
								<td class="pr-4">{connection.attributes?.provider}</td>
								<td class="pr-4">{connection.attributes?.externalName}</td>
								<td>{connection.attributes?.hidden ? '❌' : '✅'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<Button variant="secondary">
					<a href="/me/edit-connections">{$t('ui.edit')}</a>
				</Button>
			</div>
		{/if}

		{#if !steamConnected}
			<div>
				<h3>{$t('me.connectSteam')}</h3>
				<Button variant="secondary">
					<a href="/auth/connect/steam" data-sveltekit-preload-data="off">
						{$t('me.connectSteam')}
					</a>
				</Button>
			</div>
		{/if}

		<div>
			<h3>{$t('me.downloadOwnData')}</h3>
			<Button variant="secondary">
				<a href="/api/users/me/download-data">{$t('ui.download')}</a>
			</Button>
		</div>

		<div>
			<h3>{$t('me.deleteAccount')}</h3>
			<Button variant="destructive">
				<a href="/me/delete-account">{$t('ui.delete')}</a>
			</Button>
		</div>
	{/if}

	{#if !user}
		<p>{$t('me.userNotLoaded')}</p>
	{/if}
</div>
