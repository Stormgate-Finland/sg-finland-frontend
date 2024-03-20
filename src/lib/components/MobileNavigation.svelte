<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import CloseIcon from '$assets/icons/cross.svg?component';
	import MenuIcon from '$assets/icons/menu.svg?component';
	import { t } from '$lib/translations';

	let path: string;

	$: path = $page.url.pathname;
	$: isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<button
	class="absolute right-0 top-0 z-50 pb-2 pl-2 pr-4 pt-4 text-primary lg:hidden"
	on:click={toggleMenu}
>
	{#if isOpen}
		<CloseIcon class="h-8 w-8 text-primary" />
	{:else}
		<MenuIcon class="h-8 w-8 text-primary" />
	{/if}
</button>

<div
	class={clsx([
		isOpen ? 'flex' : 'hidden',
		'absolute right-0 top-0 z-40 h-full w-11/12 max-w-md flex-col bg-background px-6 py-8 shadow-sm',
	])}
>
	<nav>
		<ul class="flex flex-col gap-4 text-xl [&>li>a]:px-2">
			<li>
				<a
					href="/"
					data-active={path === '/'}
					class="data-[active=true]:bg-primary"
					on:click={toggleMenu}>{$t('navigation.home')}</a
				>
			</li>
			<li>
				<a
					href="/posts"
					data-active={path === '/posts'}
					class="data-[active=true]:bg-primary"
					on:click={toggleMenu}>{$t('navigation.news')}</a
				>
			</li>
			<li>
				<a
					href="/streams"
					data-active={path === '/streams'}
					class="data-[active=true]:bg-primary"
					on:click={toggleMenu}>{$t('navigation.streams')}</a
				>
			</li>
			<li class="text-sm">
				<a target="_blank" href="https://playstormgate.com/" on:click={toggleMenu}
					>PlayStormgate.com</a
				>
			</li>
		</ul>
	</nav>
</div>
