<script lang="ts">
	import { t } from '$/lib/translations';
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

<div class="space-y-6">
	<h1>{$t('changeUsername.heading')}</h1>

	<form method="POST" use:enhance>
		<Form.Field {form} name="username">
			<Form.Control let:attrs>
				<Form.Label>{$t('changeUsername.newUsername')}</Form.Label>
				<Input {...attrs} bind:value={$formData.username} />
			</Form.Control>
			<Form.Description>{$t('changeUsername.description')}</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button formaction="?/changeUsername">{$t('changeUsername.submit')}</Form.Button>
	</form>
</div>
