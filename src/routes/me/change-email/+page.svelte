<script lang="ts">
	import { t } from '$/lib/translations';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance } = form;
</script>

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
		<Form.Button formaction="?/changeEmail">{$t('changeEmail.submit')}</Form.Button>
	</form>
</div>
