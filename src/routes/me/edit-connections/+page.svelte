<script lang="ts">
	import { t } from '$/lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;
	const { connections } = data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance } = form;
</script>

<PageHead title={$t('editConnections.heading')} />

<div class="space-y-6">
	<h1>{$t('editConnections.heading')}</h1>

	<form method="POST" use:enhance>
		<table>
			<thead>
				<tr>
					<th class="pr-4">{$t('me.provider')}</th>
					<th class="pr-4">{$t('me.username')}</th>
					<th>{$t('editConnections.public')}</th>
				</tr>
			</thead>
			<tbody>
				{#each connections as connection, index (connection.id)}
					<tr>
						<td class="pr-4">
							{connection.attributes?.provider}
						</td>
						<td class="pr-4">
							{connection.attributes?.externalName}
						</td>
						<td class="text-center">
							<Form.Field {form} name="public">
								<Form.Control let:attrs>
									<Checkbox {...attrs} bind:checked={$formData.public[index]} />
									<input name={attrs.name} value={$formData.public[index]} hidden />
								</Form.Control>
							</Form.Field>
							<Form.Field {form} name="id">
								<Form.Control let:attrs>
									<Input {...attrs} type="hidden" bind:value={$formData.id[index]} />
								</Form.Control>
							</Form.Field>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="mt-4 flex gap-4">
			<Button variant="secondary">
				<a href="/me">{$t('ui.cancel')}</a>
			</Button>
			<Form.Button formaction="?/updateConnections">{$t('ui.save')}</Form.Button>
		</div>
	</form>
</div>
