<script lang="ts">
	export let title: string = '';
	export let extraTitles: string[] = [];
	export let description = '';
	export let ogImage = '';
	export let siteUrl = '';

	const siteTitle = 'Stormgate Finland';
	const formattedTitle = makeTitle(title, extraTitles);

	function makeTitle(title: string, extraTitles: string[], suffix = siteTitle) {
		if (title && extraTitles.length > 0) {
			return [title, ...extraTitles, suffix].join(' · ');
		}
		return title ? [title, suffix].join(' · ') : suffix;
	}
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={ogImage} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
