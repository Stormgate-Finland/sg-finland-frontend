<script>
	import { page } from '$app/stores';
	import { t } from '$/lib/translations';
	import Button from '$lib/components/ui/button/button.svelte';
	import PageHead from '$components/PageHead.svelte';

	const { user } = $page.data;

	export let data;
</script>

<PageHead title={$t('login.heading')} description={$t('login.pageDescription')} />

<div class="space-y-6">
	<h1>{$t('login.heading')}</h1>

	{#if user?.username}
		<p>
			{$t('login.loggedIn')}:<br />
			<strong>{user.username}</strong>
		</p>
		<p><Button href="/logout">{$t('login.logout')}</Button></p>
	{:else}
		<p class="markdown">
			{$t('login.info')}
			<a data-sveltekit-preload-data="off" href="https://discord.com/register"
				>{$t('login.createItFist')}</a
			>. {$t('login.connectYourEmail')}
		</p>
		<p>
			<Button
				href={data.connectWithDiscordUrl}
				data-sveltekit-preload-data="off"
				class="font-semibold">🔑 {$t('login.loginWithDiscord')}</Button
			>
		</p>
	{/if}
</div>
