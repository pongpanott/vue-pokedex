<template>
	<div class="grid grid-cols-1 px-4 mb-[50px]">
		<img
			v-bind:src="this.image"
			v-bind:alt="this.name"
			class="rounded bg-[#f2f2f2] p-4"
		/>
		<p class="text-[#919191] text-xs mt-1"># {{ pid }}</p>
		<p class="text-[#313131] text-lg mt-2 mb-1">{{ name }}</p>
		<AbilityBadgeWrapper :types="types" />
	</div>
</template>

<script>
// import GrassAbilityBadge from "./AbilityBadge/GrassAbilityBadge.vue";
import AbilityBadgeWrapper from "./AbilityBadge/AbilityBadgeWrapper.vue";

export default {
	name: "PokemonCard",
	components: { AbilityBadgeWrapper },
	props: {
		pid: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		types: {
			type: Object,
			required: true,
		},
	},
};
</script>
