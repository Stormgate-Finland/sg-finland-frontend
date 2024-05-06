<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import CloseIcon from '$assets/icons/cross.svg?component';
	import MenuIcon from '$assets/icons/menu.svg?component';
	import SgFavIcon from '$assets/icons/sg-favicon.png';
	import { t } from '$lib/translations';
	import DiscordServerWidget from './DiscordServerWidget.svelte';
	import Avatar from './Avatar.svelte';

	let path: string;

	$: path = $page.url.pathname;
	$: isOpen = false;

	const { user } = $page.data;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	const navItems = [
		{ href: '/', label: $t('navigation.home') },
		{ href: '/posts', label: $t('navigation.news') },
		{ href: '/streams', label: $t('navigation.streams') },
		{ href: '/members', label: $t('navigation.members') },
		{ href: '/ladder', label: $t('navigation.ladder') },
	];
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
		'absolute right-0 top-0 z-40 h-full w-11/12 max-w-md flex-col bg-background px-6 py-8 drop-shadow-md transition-all duration-200 ease-in-out',
	])}
>
	<nav>
		<ul class="flex flex-col gap-4 text-xl [&>li>a]:px-2">
			{#each navItems as { href, label }}
				<li>
					<a
						{href}
						data-active={path === href}
						class="data-[active=true]:bg-primary"
						on:click={toggleMenu}
					>
						{label}
					</a>
				</li>
			{/each}

			<li class="text-sm">
				<a
					target="_blank"
					class="flex items-center gap-1"
					href="https://playstormgate.com/"
					on:click={toggleMenu}
					><img
						class="h-full w-3"
						src={SgFavIcon}
						alt="PlayStormgate favicon"
					/>PlayStormgate.com</a
				>
			</li>

			<li class="mt-4 border-t-2 pt-2">
				{#if user?.username}
					<a
						class="flex items-center gap-2 border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
						href="/me"
						data-active={path === '/me'}
						on:click={toggleMenu}
					>
						{#if user.avatarUrl}
							<Avatar url={user.avatarUrl} faction={user.faction} class="h-7 w-7 rounded-full" />
						{/if}

						<div class="text-sm">{user.username}</div>
					</a>
				{:else}
					<a
						href="/login"
						data-active={path === '/login'}
						class=" border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
						>{$t('navigation.login')}</a
					>
				{/if}
			</li>
		</ul>
	</nav>

	<div class="mt-8">
		<DiscordServerWidget />
	</div>
</div>
