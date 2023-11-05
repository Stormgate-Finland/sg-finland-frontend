<script>
	import '../app.postcss';
	import '$lib/twicpicsConfig';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import SideBar from '$components/SideBar.svelte';

	export let data;
</script>

<div class="flex min-h-screen flex-col items-center">
	<Header logo={data.siteSettings?.attributes?.logo} />
	<div class="flex h-full w-full max-w-screen-xl flex-col justify-center">
		<div class="flex flex-1 gap-12">
			<SideBar />
			<main class="flex-1">
				<slot />
			</main>
		</div>
	</div>
	<Footer />
</div>
