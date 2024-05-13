<script lang="ts">
	import { PUBLIC_CMS_URL } from '$env/static/public';

	function formatSrc(src: string) {
		if (src.startsWith('/')) {
			return `${PUBLIC_CMS_URL}${$$restProps.src}`;
		}
		return src;
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {...$$restProps} src={formatSrc($$restProps.src)} />
