<script type="ts">
	import { t } from '$lib/translations';
</script>

<footer
	class="mt-10 flex w-full flex-col items-center justify-center gap-4 justify-self-end bg-accent bg-gradient-to-b from-transparent to-black/25 p-8 backdrop-blur-sm"
>
	<nav class="flex gap-4">
		<a href="/links">{$t('footer.links')}</a>
		<a href="/about">{$t('footer.about')}</a>
		<a href="/contact">{$t('footer.contact')}</a>
	</nav>

	<div class="font-mono text-muted-foreground">
		© stormgate.fi {new Date().getFullYear()}
	</div>
</footer>
