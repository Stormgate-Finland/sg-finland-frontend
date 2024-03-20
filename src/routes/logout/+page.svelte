<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { t } from '$/lib/translations';

	const { user } = $page.data;
	if (user) {
		onMount(() => (window.location.href = '/logout'));
	}
</script>

<h1>{$t('logout.heading')}</h1>

<p>
	{#if user}
		{$t('logout.loggingOut')}
	{:else}
		{$t('logout.loggedOut')}
	{/if}
</p>
