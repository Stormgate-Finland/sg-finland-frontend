<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	import { Button } from '$components/ui/button';

	const { user } = $page.data;
	export let data;
	const { connections, connectSteamUrl } = data;
</script>

<div class="space-y-6">
	<h1>{$t('me.heading')}</h1>

	{#if user}
		<div class="flex gap-16">
			{#if user.avatarUrl}
				<img src={user.avatarUrl} alt="Avatar" class="h-32 w-32 rounded-full" />
			{/if}
			<div class="flex flex-col gap-4">
				<div class="flex gap-4">
					<p>
						<small>{$t('me.username')}</small><br />
						<strong>{user.username ?? 'User'}</strong>
					</p>

					<Button variant="secondary" size="sm" class="self-end">
						<a href="/me/change-username">{$t('me.changeUsername')}</a>
					</Button>
				</div>
				<p>
					<small>{$t('me.email')}</small><br />
					<strong>{user.email}</strong>
				</p>
			</div>
		</div>

		<Button variant="secondary">
			<a href="/logout">{$t('me.logout')}</a>
		</Button>

		{#if connections}
			<div class="space-y-2">
				<h3>{$t('me.connections')}</h3>
				<table>
					<thead>
						<tr>
							<th class="pr-4">{$t('me.provider')}</th>
							<th class="pr-4">{$t('me.username')}</th>
							<th>{$t('me.public')}</th>
						</tr>
					</thead>
					<tbody>
						{#each connections as connection (connection.id)}
							<tr>
								<td class="pr-4">{connection.attributes?.provider}</td>
								<td class="pr-4">{connection.attributes?.externalName}</td>
								<td>{connection.attributes?.private ? '❌' : '✅'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

		{#if connectSteamUrl}
			<div>
				<h3>{$t('me.connectSteam')}</h3>
				<p>
					<a href={connectSteamUrl} target="_blank" rel="noopener noreferrer">
						{$t('me.connectSteam')}
					</a>
				</p>
			</div>
		{/if}

		<div>
			<h3>{$t('me.deleteAccount')}</h3>
			<Button variant="destructive">
				<a href="/me/delete-account">{$t('me.delete')}</a>
			</Button>
		</div>
	{/if}
</div>
