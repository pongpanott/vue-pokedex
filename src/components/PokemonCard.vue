<template>
	<div class="grid grid-cols-1 px-4 mb-[50px]">
		<img
			v-bind:src="this.image"
			v-bind:alt="this.name"
			class="rounded bg-[#f2f2f2] p-4"
		/>
		<p class="text-[#919191] text-xs mt-1"># {{ pid }}</p>
		<p class="text-[#313131] text-lg mt-2 mb-1">{{ toCapitalize(name) }}</p>
		<div class="flex gap-x-1">
			<div v-for="type in types" :key="type.slot">
				<GrassAbilityBadge
					v-if="type.type.name === POKEMON_TYPES.GRASS"
					:name="toCapitalize(type.type.name)"
				/>
				<PoisonAbilityBadge
					v-if="type.type.name === 'poison'"
					:name="toCapitalize(type.type.name)"
				/>
				<FireAbilityBadge
					v-if="type.type.name === 'fire'"
					:name="toCapitalize(type.type.name)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { POKEMON_TYPES } from "@/constants/pokemonTypes";
import GrassAbilityBadge from "./AbilityBadge/GrassAbilityBadge.vue";
import PoisonAbilityBadge from "./AbilityBadge/PoisonAbilityBadge.vue";
import FireAbilityBadge from "./AbilityBadge/FireAbilityBadge.vue";

export default {
	name: "PokemonCard",
	components: { GrassAbilityBadge, PoisonAbilityBadge, FireAbilityBadge },
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
	data() {
		return {
			POKEMON_TYPES,
		};
	},
	methods: {
		toCapitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
};
</script>
