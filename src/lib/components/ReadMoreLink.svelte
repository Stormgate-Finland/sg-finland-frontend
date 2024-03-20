<script lang="ts">
	import { t } from '$lib/translations';
	export let href = '';
</script>

<a class="text-primary underline underline-offset-2" {href}>{$t('post.readMore')}</a>
