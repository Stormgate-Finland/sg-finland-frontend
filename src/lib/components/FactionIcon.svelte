<script lang="ts">
	import InfernalIcon from '$assets/icons/infernal.svg?component';
	import VanguardIcon from '$assets/icons/vanguard.svg?component';
	import RandomIcon from '$assets/icons/dice.svg?component';
	import { Enum_Userspermissionsuser_Faction } from '$types/generated/strapi';
	import clsx from 'clsx';

	export let faction = '';
</script>

{#if faction === Enum_Userspermissionsuser_Faction.Infernal}
	<InfernalIcon class={clsx(['h-6 w-6 text-infernal'], $$restProps.class)} />
{:else if faction === Enum_Userspermissionsuser_Faction.Vanguard}
	<VanguardIcon class={clsx(['h-6 w-6 text-vanguard'], $$restProps.class)} />
{:else}
	<RandomIcon class={clsx(['h-6 w-6 text-gray-500'], $$restProps.class)} />
{/if}
