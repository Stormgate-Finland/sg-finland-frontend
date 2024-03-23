<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	let path: string;

	$: path = $page.url.pathname;
	const { user } = $page.data;
</script>

<aside class="sticky top-4 hidden h-full w-64 border-r-2 border-primary py-2 pr-4 lg:flex">
	<nav class="w-full">
		<ul class="flex flex-col gap-4 text-xl [&>li>a]:px-2">
			<li>
				<a
					href="/"
					data-active={path === '/'}
					class="border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
					>{$t('navigation.home')}</a
				>
			</li>
			<li>
				<a
					href="/posts"
					data-active={path === '/posts'}
					class="border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
					>{$t('navigation.news')}</a
				>
			</li>
			<li>
				<a
					href="/streams"
					data-active={path === '/streams'}
					class="border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
					>{$t('navigation.streams')}</a
				>
			</li>
			<li class="text-sm">
				<a target="_blank" class="border-l-4 border-l-transparent" href="https://playstormgate.com/"
					>PlayStormgate.com</a
				>
			</li>

			<li class="mt-4 border-t-2 pt-2">
				{#if user?.username}
					<a
						class="flex items-center gap-2 border-l-4 border-l-transparent data-[active=true]:border-l-4 data-[active=true]:border-l-primary"
						href="/me"
						data-active={path === '/me'}
					>
						{#if user.avatarUrl}
							<img src={user.avatarUrl} alt="Avatar" class="h-7 w-7 rounded-full" />
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
</aside>
