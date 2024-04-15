<script lang="ts">
	import Time from 'svelte-time';
	import { t } from '$lib/translations';

	export let author: string | undefined;
	export let createdAt: Date;
	export let long: boolean = false;
</script>

<div class="font-bold text-highlight">
	<Time timestamp={createdAt} format="D.M.YYYY" />
	{#if author}
		{#if long}
			<span class="text-sm">{$t('post.writtenBy')}</span>
		{/if}
		{`@${author}`}
	{/if}
</div>
