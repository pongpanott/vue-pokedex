<template>
	<div class="flex gap-x-1">
		<div v-for="type in types" :key="type.slot">
			<GrassAbilityBadge
				v-if="type.type.name === 'grass'"
				:name="type.type.name"
			/>
			<PoisonAbilityBadge
				v-if="type.type.name === 'poison'"
				:name="type.type.name"
			/>
		</div>
	</div>
</template>

<script>
import GrassAbilityBadge from "./GrassAbilityBadge.vue";
import PoisonAbilityBadge from "./PoisonAbilityBadge.vue";

export default {
	name: "AbilityBadgeWrapper",
	components: { GrassAbilityBadge, PoisonAbilityBadge },
	props: {
		types: {
			type: Object,
			require: true,
		},
	},
};
</script>
