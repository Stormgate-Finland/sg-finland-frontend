<script lang="ts">
	import { TwicImg } from '@twicpics/components/sveltekit';
	import { PUBLIC_TWICPICS_DOMAIN, PUBLIC_CMS_URL } from '$env/static/public';

	function formatSrc(src: string) {
		if (src.startsWith('/')) {
			return `${PUBLIC_CMS_URL}${$$restProps.src}`;
		}
		return src;
	}
</script>

{#if PUBLIC_TWICPICS_DOMAIN}
	<TwicImg {...$$restProps} src={$$restProps.src}></TwicImg>
{:else}
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {...$$restProps} src={formatSrc($$restProps.src)} />
{/if}
