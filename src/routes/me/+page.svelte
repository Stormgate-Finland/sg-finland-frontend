<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	const { user } = $page.data;
	export let data;
	const { connections } = data;
</script>

<h1>{$t('me.title')}</h1>

<p>
	{#if user}
		<div class="flex gap-16 pt-4">
			{#if user.avatarUrl}
				<img src={user.avatarUrl} alt="Avatar" class="h-32 w-32 rounded-full" />
			{/if}
			<div class="flex flex-col gap-4">
				<p>
					<small>{$t('me.signedInAs')}</small><br />
					<strong>{user.username ?? 'User'}</strong>
				</p>
				<h3>
					<a href="/logout">{$t('me.logout')}</a>
				</h3>
			</div>
		</div>
		{#if connections}
			<div class="space-y-2 pt-4">
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
	{/if}
</p>
