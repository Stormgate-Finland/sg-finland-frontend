<script lang="ts">
	import InfernalIcon from '$assets/icons/infernal.svg?component';
	import VanguardIcon from '$assets/icons/vanguard.svg?component';
	import RandomIcon from '$assets/icons/dice.svg?component';
	import { Enum_Userspermissionsuser_Faction } from '$types/generated/strapi';
	import clsx from 'clsx';
	import { LadderFaction } from '$types/ladder';

	export let faction: string | null | undefined = null;
</script>

{#if !faction}
	<!-- 	-->
{:else if faction === Enum_Userspermissionsuser_Faction.Infernal || faction === LadderFaction.Infernal}
	<InfernalIcon class={clsx(['h-6 w-6 text-infernal'], $$restProps.class)} />
{:else if faction === Enum_Userspermissionsuser_Faction.Vanguard}
	<VanguardIcon class={clsx(['h-6 w-6 text-vanguard'], $$restProps.class)} />
{:else if faction === LadderFaction.Faction3}
	<span class={clsx(['w-6 text-center text-lg text-yellow-300'], $$restProps.class)}>??</span>
{:else}
	<RandomIcon class={clsx(['h-6 w-6 text-gray-500'], $$restProps.class)} />
{/if}
