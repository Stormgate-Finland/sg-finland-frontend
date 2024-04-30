<script lang="ts">
	import { t } from '$lib/translations';
	import type { CommunityUserConnection } from '$types/community';
	import TwitchIcon from '$assets/icons/twitch.svg?component';
	import YoutubeIcon from '$assets/icons/youtube.svg?component';

	export let userConnections: CommunityUserConnection[];
</script>

{#if userConnections.length > 0}
	<div class="flex flex-wrap gap-4">
		{#each userConnections as connection}
			{#if connection.provider === 'youtube'}
				<a
					href="https://youtube.com/channel/{connection.externalId}"
					target="_blank"
					title={`YouTube ${connection.externalName}`}
					rel="noopener noreferrer"
					class="text-primary underline underline-offset-2"
				>
					<YoutubeIcon class="h-5 w-5 text-primary" />
				</a>
			{:else if connection.provider === 'twitch'}
				<a
					href="https://twitch.tv/{connection.externalName}"
					target="_blank"
					title={`Twitch ${connection.externalName}`}
					rel="noopener noreferrer"
					class="text-primary underline underline-offset-2"
				>
					<TwitchIcon class="h-5 w-5 text-primary" />
				</a>
			{/if}
		{/each}
	</div>
{/if}
