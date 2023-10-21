<script>
	import { page } from '$app/stores';

    const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<h1>{$page.error?.message ?? "Error"}</h1>

<div class="container">
	{#if online}
		{#if $page.status === 404}
			<h1>Page not found!</h1>
		{:else}
			<h1>Yikes!</h1>
			<p>Something went wrong when we tried to render this page.</p>
			{#if $page.error?.message}
				<p class="error">{$page.status}: {$page.error.message}</p>
			{:else}
				<p class="error">Encountered a {$page.status} error.</p>
			{/if}
			<p>Please try reloading the page.</p>
		{/if}
	{:else}
		<h1>It looks like you're offline</h1>
		<p>Reload the page once you've found the internet.</p>
	{/if}
</div>