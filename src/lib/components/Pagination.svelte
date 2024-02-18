<script lang="ts">
	import type { Pagination } from '$types/generated/strapi';
	import clsx from 'clsx';

	export let pagination: Pagination;

	const pageNumbers = getPageNumbers(pagination, 1);

	function getPageNumbers({ page = 1, pageCount = 1 }, pagesAround = 1) {
		const pages = [];
		// Add pages around current page
		for (
			let i = Math.max(page - pagesAround, pagesAround);
			i <= Math.min(page + pagesAround, pageCount - 1);
			i++
		) {
			pages.push(i);
		}
		if (pages[0] !== 1) {
			pages.unshift(1);
		}
		if (pages[pages.length - 1] !== pageCount) {
			pages.push(pageCount);
		}
		return pages;
	}
</script>

<nav class="flex gap-3 pt-4">
	{#if pagination.page > 1}
		<a href={`/posts?page=${pagination.page - 1}`} class="px-2 py-1 font-mono text-lg text-primary"
			>«</a
		>
	{:else}
		<span class="px-2 py-1 font-mono text-muted-foreground/50">«</span>
	{/if}
	{#each pageNumbers as page, index}
		<a
			href={`/posts?page=${page}`}
			class={clsx([
				pagination.page === page ? 'text-foreground' : 'text-primary',
				pagination.page === page ? 'bg-secondary' : 'border-secondary',
				'px-2 py-1 font-mono',
			])}
		>
			{page}
		</a>
		{#if index < pageNumbers.length - 1 && pageNumbers[index + 1] > page + 1}
			<span class="flex items-center font-mono text-muted-foreground/50">…</span>
		{/if}
	{/each}
	{#if pagination.page < pagination.pageCount}
		<a href={`/posts?page=${pagination.page + 1}`} class="px-2 py-1 font-mono text-lg text-primary"
			>»</a
		>
	{:else}
		<span class="px-2 py-1 font-mono text-muted-foreground/50">»</span>
	{/if}
</nav>
