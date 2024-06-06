<script lang="ts">
	import { t } from '$/lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';
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

<PageHead title={$t('verifyEmail.heading')} />

<div class="space-y-6">
	<h1>{$t('verifyEmail.heading')}</h1>

	<p>{$t('verifyEmail.info')}</p>

	<form method="POST" use:enhance class="w-32">
		<Form.Field {form} name="code">
			<Form.Control let:attrs>
				<Form.Label>{$t('verifyEmail.code')}</Form.Label>
				<Input {...attrs} type="number" bind:value={$formData.code} required maxlength={6} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button formaction="?/verifyEmail">{$t('ui.submit')}</Form.Button>
	</form>
</div>
