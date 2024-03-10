<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const { user } = $page.data;
	if (user) {
		onMount(() => (window.location.href = '/logout'));
	}
</script>

<h1>Log out</h1>

<p>
	{#if user}
		Logging you out...
	{:else}
		You are now logged out.
	{/if}
</p>
