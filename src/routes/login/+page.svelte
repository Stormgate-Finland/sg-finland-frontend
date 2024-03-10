<script>
	import { page } from '$app/stores';

	const loginUrl =
		'https://discord.com/oauth2/authorize?client_id=1213378673458290738&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fcallback%2Fdiscord&scope=identify+email+connections';
</script>

<h1>Login</h1>
<div>
	<p>
		<a href={loginUrl}>Login with Discord</a>
	</p>
</div>
