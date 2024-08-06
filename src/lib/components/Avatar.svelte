<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import userIcon from '$assets/icons/user.svg?url';
	import { cn } from '$lib/utils';
	import { Enum_Userspermissionsuser_Faction } from '$types/generated/strapi';

	export let url = '';
	export let faction: Enum_Userspermissionsuser_Faction | string = '';

	const factionColorCss = (faction: string) => {
		switch (faction) {
			case Enum_Userspermissionsuser_Faction.Infernal:
				return 'filter: invert(26%) sepia(76%) saturate(1877%) hue-rotate(349deg) brightness(74%) contrast(92%);';
			case Enum_Userspermissionsuser_Faction.Vanguard:
				return 'filter: invert(31%) sepia(76%) saturate(3887%) hue-rotate(192deg) brightness(71%) contrast(91%);';
			case Enum_Userspermissionsuser_Faction.Celestial:
				return 'brightness(0) saturate(100%) invert(23%) sepia(21%) saturate(6816%) hue-rotate(267deg) brightness(98%) contrast(94%);';
			default:
				return 'filter:invert(1) brightness(0.5);';
		}
	};
</script>

<Image
	src={url}
	alt="Avatar"
	class={cn('h-32 w-32 rounded-full', $$restProps.class)}
	onError={`this.src = '${userIcon}'; this.style = '${factionColorCss(faction)}'`}
/>
