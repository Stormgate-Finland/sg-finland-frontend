<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import PageHead from '$components/PageHead.svelte';

	export let data;
	$: ({ page } = data);
</script>

{#key page.id}
	<PageHead title={page.attributes?.title} />
{/key}

<h1 class="mb-8">{page.attributes?.title}</h1>

<div class="markdown embeds">
	<SvelteMarkdown source={page.attributes?.body} />
</div>
