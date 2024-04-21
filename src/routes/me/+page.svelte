<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	import { Button } from '$components/ui/button';

	const { user } = $page.data;

	export let data;
	const { connections, connectSteamUrl } = data;
	const discord = connections?.find((c) => c.attributes?.provider === 'discord');
	const otherConnections = connections?.filter((c) => c.attributes?.provider !== 'discord');
</script>

<div class="space-y-6">
	<h1>{$t('me.heading')}</h1>

	{#if user}
		<div class="flex gap-16">
			{#if user.avatarUrl}
				<img src={user.avatarUrl} alt="Avatar" class="h-32 w-32 rounded-full" />
			{/if}
			<div class="flex gap-4">
				<div class="flex flex-col gap-4">
					<p>
						<small>{$t('me.username')}</small><br />
						<strong>{user.username ?? 'User'}</strong>
					</p>
					<p>
						<small>{$t('me.email')}</small><br />
						<strong>{user.email}</strong>
					</p>
				</div>

				<div class="flex flex-col justify-center gap-4">
					<Button variant="secondary" size="sm" class="self-end">
						<a href="/me/change-username">{$t('me.changeUsername')}</a>
					</Button>
					<Button variant="secondary" size="sm" class="self-end">
						<a href="/me/change-email">{$t('me.changeEmail')}</a>
					</Button>
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
					<a href="/me/edit-connections">{$t('me.editConnections')}</a>
				</Button>
			</div>
		{/if}

		{#if connectSteamUrl && !otherConnections?.find((c) => c.attributes?.provider === 'steam')}
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
			<h3>{$t('me.downloadOwnData')}</h3>
			<Button variant="secondary">
				<a href="/api/users/me/download-data">{$t('me.download')}</a>
			</Button>
		</div>

		<div>
			<h3>{$t('me.deleteAccount')}</h3>
			<Button variant="destructive">
				<a href="/me/delete-account">{$t('me.delete')}</a>
			</Button>
		</div>
	{/if}
</div>
