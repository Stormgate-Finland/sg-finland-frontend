<script lang="ts">
	import { TwicImg } from '@twicpics/components/sveltekit';
	import { PUBLIC_TWICPICS_DOMAIN } from '$env/static/public';
</script>

{#if PUBLIC_TWICPICS_DOMAIN}
	<TwicImg {...$$restProps} src={$$restProps.src}></TwicImg>
{:else}
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {...$$restProps} src={$$restProps.src} />
{/if}
