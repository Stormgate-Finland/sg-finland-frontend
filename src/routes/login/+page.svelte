<script>
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import { page } from '$app/stores';
</script>

<h1>Login</h1>
<div>
	{#if $page.data.session}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<SignOut signInPage="auth/signout" />
	{:else}
		<SignIn provider="discord" signInPage="auth/signin" class="m-4" />
	{/if}
</div>
