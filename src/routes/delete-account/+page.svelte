<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	import { Button } from '$components/ui/button';

	export let form;

	const { user } = $page.data;
</script>

<h1>{$t('delete-account.heading')}</h1>

{#if user}
	<div class="flex flex-col gap-4">
		<p>
			{$t('delete-account.confirm')}
		</p>
		<p>
			{$t('delete-account.confirm2')}
		</p>

		<form method="POST">
			<Button variant="destructive" formaction="?/delete" type="submit">
				{$t('delete-account.confirmDelete')}
			</Button>
		</form>

		{#if form?.error}
			<p class="text-destructive">
				{form.error}
			</p>
		{/if}
	</div>
{/if}
