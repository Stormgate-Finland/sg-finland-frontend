<script lang="ts">
	import { page } from '$app/stores';

	const { user } = $page.data;
</script>

<h1>My profile</h1>

<p>
	{#if user}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{user.username ?? 'User'}</strong>
		</span>
	{/if}
</p>
