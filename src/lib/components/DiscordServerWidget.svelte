<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	import DiscordIcon from '$assets/icons/discord.svg?component';
	import { Button } from '$components/ui/button';

	const { discordServer } = $page.data;
</script>

{#if discordServer}
	<Button
		class="rounded-xl bg-transparent py-6 text-foreground hover:no-underline focus:no-underline"
		href={discordServer?.instant_invite}
		target="_blank"
	>
		<div class="flex items-center gap-4">
			<DiscordIcon class="h-5 w-5" color="#5865f2" />
			<div>
				<h6>{$t('discord.join')}</h6>
				<p class="text-xs">
					{$t('discord.membersOnline')}:
					<span class="font-bold">{discordServer?.presence_count ?? 0}</span>
				</p>
			</div>
		</div>
	</Button>
{/if}
