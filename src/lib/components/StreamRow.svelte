<script lang="ts">
	import type { StreamEntity } from '$types/generated/strapi';
	import TwitchIcon from '$assets/icons/twitch.svg?component';
	import YoutubeIcon from '$assets/icons/youtube.svg?component';

	export let stream: StreamEntity;
</script>

{#if stream?.attributes}
	<a href={stream.attributes.url}>
		<div class="flex items-center gap-4">
			<div>
				{#if stream.attributes.url.match(/youtube\.com\//)}
					<YoutubeIcon class="h-4 w-4 text-primary" />
				{:else if stream.attributes.url.match(/twitch\.tv\//)}
					<TwitchIcon class="h-4 w-4 text-primary" />
				{/if}
			</div>

			<h5>{stream.attributes.title}</h5>
		</div>
	</a>
{/if}
