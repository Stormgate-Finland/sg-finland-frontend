<script>
	import { page } from '$app/stores';
	import { t } from '$/lib/translations';

	const { user } = $page.data;

	export let data;
</script>

<h1>{$t('login.heading')}</h1>

{#if user?.username}
	<p>
		{$t('login.loggedIn')}:<br />
		<strong>{user.username}</strong>
	</p>
	<p><a href="/logout">{$t('login.logout')}</a></p>
{:else}
	<p>
		<a href={data.connectWithDiscordUrl} data-sveltekit-preload-data="off"
			>{$t('login.loginWithDiscord')}</a
		>
	</p>
{/if}
