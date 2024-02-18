<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	$: ({ page } = data);
</script>

<h1 class="mb-8">{page.attributes?.title}</h1>

<div class="markdown">
	<SvelteMarkdown source={page.attributes?.body} />
</div>
