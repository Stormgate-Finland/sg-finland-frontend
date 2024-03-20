<script>
	import { page } from '$app/stores';
	import { t } from '$/lib/translations';

	const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<h1>{$page.error?.message ?? 'Error'}</h1>

<div class="container">
	{#if online}
		{#if $page.status === 404}
			<h1>{$t('errorPage.heading404')}</h1>
		{:else}
			<h1>{$t('errorPage.heading404')}</h1>
			<p>{$t('errorPage.somethingWentWrong')}</p>
			{#if $page.error?.message}
				<p class="error">{$page.status}: {$page.error.message}</p>
			{:else}
				<p class="error">{($t('errorPage.errorMessage'), { status: $page.status })}</p>
			{/if}
			<p>{$t('errorPage.tryAgain')}</p>
		{/if}
	{:else}
		<h1>{$t('errorPage.offline')}</h1>
		<p>{$t('errorPage.reload')}</p>
	{/if}
</div>
