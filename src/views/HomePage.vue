<template>
	<PokemonListWrapper>
		<PokemonCard
			v-for="poke in pokemons"
			:key="poke.id"
			:pid="poke.id"
			:name="poke.name"
			:image="poke.image"
			:types="poke.types"
		/>
	</PokemonListWrapper>
</template>

<script>
import PokemonListWrapper from "@/components/PokemonListWrapper.vue";
import PokemonCard from "@/components/PokemonCard.vue";

export default {
	name: "HomePage",
	components: { PokemonListWrapper, PokemonCard },
	data() {
		return {
			pokemons: [
				{
					id: 1,
					name: "Bulbasaur",
					types: [
						{
							slot: 1,
							type: {
								name: "grass",
								url: "https://pokeapi.co/api/v2/type/12/",
							},
						},
						{
							slot: 2,
							type: {
								name: "poison",
								url: "https://pokeapi.co/api/v2/type/4/",
							},
						},
					],
					image:
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
				},
				{
					id: 2,
					name: "Ivysaur",
					types: [
						{
							slot: 1,
							type: {
								name: "grass",
								url: "https://pokeapi.co/api/v2/type/12/",
							},
						},
						{
							slot: 2,
							type: {
								name: "poison",
								url: "https://pokeapi.co/api/v2/type/4/",
							},
						},
					],
					image:
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
				},
			],
		};
	},
};
</script>
