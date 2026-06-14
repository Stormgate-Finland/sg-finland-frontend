<script lang="ts">
	import '../app.postcss';
	import BackgroundImage from '$components/BackgroundImage.svelte';
	import Header from '$components/Header.svelte';
</script>

<div class="page-gradient flex min-h-screen flex-col items-center">
	<BackgroundImage image={null} />
	<Header logo={null} />
	<div class="mt-4 flex h-full w-full max-w-screen-xl grow flex-col justify-center px-4">
		<main class="mx-auto w-full max-w-screen-md">
			<slot />
		</main>
	</div>
</div>
