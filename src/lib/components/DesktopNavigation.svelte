<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	import SgFavIcon from '$assets/icons/sg-favicon.png';
	import Avatar from './Avatar.svelte';

	let path: string;

	$: path = $page.url.pathname;
	const { user } = $page.data;

	const navItems = [
		{ href: '/', label: $t('navigation.home') },
		{ href: '/posts', label: $t('navigation.news') },
		{ href: '/streams', label: $t('navigation.streams') },
		{ href: '/members', label: $t('navigation.members') },
		{ href: '/ladder', label: $t('navigation.ladder') },
	];
</script>

<ul class="flex flex-col gap-4 text-xl [&>li>a]:px-2">
	{#each navItems as { href, label }}
		<li>
			<a
				{href}
				data-active={path === href}
				class="border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
			>
				{label}
			</a>
		</li>
	{/each}

	<li class="text-sm">
		<a
			target="_blank"
			class="flex items-baseline gap-2 border-l-4 border-l-transparent"
			href="https://playstormgate.com/"
			><img class="h-full w-3" src={SgFavIcon} alt="PlayStormgate favicon" />PlayStormgate.com
		</a>
	</li>

	<li class="mt-4 border-t-2 pt-2">
		{#if user?.username}
			<a
				class="flex items-center gap-2 border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
				href="/me"
				data-active={path === '/me'}
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
