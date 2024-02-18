<script lang="ts">
	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;
</script>

<aside class="sticky top-4 hidden h-full w-64 border-r-2 border-primary py-2 pr-4 lg:flex">
	<nav>
		<ul class="flex flex-col gap-4 text-xl [&>li>a]:px-2">
			<li>
				<a href="/" data-active={path === '/'} class="data-[active=true]:bg-primary">Home</a>
			</li>
			<li>
				<a href="/posts" data-active={path === '/posts'} class="data-[active=true]:bg-primary"
					>News</a
				>
			</li>
			<li>
				<a href="/streams" data-active={path === '/streams'} class="data-[active=true]:bg-primary"
					>Streams</a
				>
			</li>
			<li class="text-sm">
				<a target="_blank" href="https://playstormgate.com/">PlayStormgate.com</a>
			</li>
		</ul>
	</nav>
</aside>
