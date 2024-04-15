<script lang="ts">
	import { t } from '$/lib/translations';
	import { page } from '$app/stores';
	import { Button } from '$components/ui/button';

	export let form;

	const { user } = $page.data;
</script>

<h1>{$t('deleteAccount.heading')}</h1>

{#if user}
	<div class="flex flex-col gap-4">
		<p>
			{$t('deleteAccount.confirm')}
		</p>
		<p>
			{$t('deleteAccount.confirm2')}
		</p>

		<form method="POST">
			<Button variant="destructive" formaction="?/delete" type="submit">
				{$t('deleteAccount.confirmDelete')}
			</Button>
		</form>

		{#if form?.error}
			<p class="text-destructive">
				{form.error}
			</p>
		{/if}
	</div>
{/if}
