<script>
	import '../app.postcss';
	import '$lib/twicpicsConfig';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import SideBarLeft from '$components/SideBarLeft.svelte';
	import SideBarRight from '$components/SideBarRight.svelte';
	import MobileNavigation from '$components/MobileNavigation.svelte';

	export let data;
	const { siteSettings } = data;
</script>

<div
	class="flex min-h-screen flex-col items-center bg-gradient-to-r from-black/25 from-15% via-transparent to-black/25 to-85%"
>
	<MobileNavigation />
	<Header logo={siteSettings?.attributes?.logo} />
	<div class="flex h-full w-full max-w-screen-xl grow flex-col justify-center px-2 md:px-4">
		<div class="flex flex-1 justify-center gap-10">
			<SideBarLeft />
			<main class="max-w-screen-md flex-1">
				<slot />
			</main>
			<SideBarRight />
		</div>
	</div>
	<Footer />
</div>
