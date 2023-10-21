<script>
	import '../app.css';

	import { installTwicPics } from '@twicpics/components/sveltekit';
	import '@twicpics/components/style.css';
	installTwicPics({
		domain: `https://<your-domain>.twic.pics`,
	});
</script>

<slot />
