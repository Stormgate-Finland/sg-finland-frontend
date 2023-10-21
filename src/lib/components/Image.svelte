<script>
	// @ts-nocheck

	import { TwicImg } from '@twicpics/components/sveltekit';
	import { PUBLIC_TWICPICS_DOMAIN, PUBLIC_CMS_URL } from '$env/static/public';
</script>

{#if PUBLIC_TWICPICS_DOMAIN}
	<TwicImg {...$$restProps}></TwicImg>
{:else}
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {...$$restProps} src={`${PUBLIC_CMS_URL}${$$restProps.src}`} />
{/if}
