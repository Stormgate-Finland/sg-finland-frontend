<script lang="ts">
	import { t } from '$/lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance } = form;
</script>

<PageHead title={$t('changeEmail.heading')} />

<div class="space-y-6">
	<h1>{$t('changeEmail.heading')}</h1>

	<form method="POST" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>{$t('changeEmail.newEmail')}</Form.Label>
				<Input {...attrs} type="email" bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="mt-4 flex gap-4">
			<Button variant="secondary">
				<a href="/me">{$t('ui.cancel')}</a>
			</Button>
			<Form.Button formaction="?/changeEmail">{$t('ui.submit')}</Form.Button>
		</div>
	</form>
</div>
