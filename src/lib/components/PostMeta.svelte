<script lang="ts">
	import Time from 'svelte-time';
	import { twMerge } from 'tailwind-merge';

	export let author: string | undefined;
	export let createdAt: Date;
</script>

<div class="font-bold text-fuchsia-600">
	<Time timestamp={createdAt} format="D.M.YYYY" />
	{author && `@${author}`}
</div>
