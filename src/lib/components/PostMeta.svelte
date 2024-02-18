<script lang="ts">
	import Time from 'svelte-time';

	export let author: string | undefined;
	export let createdAt: Date;
	export let long: boolean = false;
</script>

<div class="font-bold text-fuchsia-600">
	<Time timestamp={createdAt} format="D.M.YYYY" />
	{#if author}
		{#if long}
			written by
		{/if}
		{`@${author}`}
	{/if}
</div>
