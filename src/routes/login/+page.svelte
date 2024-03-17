<script>
	import { page } from '$app/stores';

	const { user } = $page.data;

	export let data;
</script>

<h1>Login</h1>

{#if user?.username}
	<p>
		You are already logged in as:<br />
		<strong>{user.username}</strong>
	</p>
	<p><a href="/logout">Logout instead?</a></p>
{:else}
	<p>
		<a href={data.connectWithDiscordUrl} data-sveltekit-preload-data="off">Login with Discord</a>
	</p>
{/if}
