<script lang="ts">
	import { t } from '$/lib/translations';

	export let data;
	$: ({ steamProfile } = data);
</script>

<h1>{$t('callback.steam.heading')}</h1>

{#if steamProfile}
	<p>{$t('callback.steam.success')}</p>
	<pre>{JSON.stringify(steamProfile, null, 2)}</pre>
{:else}
	<p>{$t('callback.steam.holdOn')}</p>
{/if}
