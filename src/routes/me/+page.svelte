<script lang="ts">
	import { page } from '$app/stores';

	const { session } = $page.data;
</script>

<h1>My profile</h1>

<p>
	{#if session}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{session.user?.name ?? 'User'}</strong>
		</span>
	{/if}
</p>
