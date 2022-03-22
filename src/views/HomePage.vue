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
import Axios from "@/services/Axios";

export default {
	name: "HomePage",
	components: { PokemonListWrapper, PokemonCard },
	data() {
		return {
			pokemons: [],
		};
	},
	created() {
		Axios.get("/").then((res) => {
			res.data.results.forEach((element) => {
				const pokeId = element.url.slice(0, -1).split("/").pop();
				Axios.get(`/${pokeId}`).then((result) => {
					const { id, name, sprites, types } = result.data;
					const { other } = sprites;

					this.pokemons.push({
						id,
						name,
						image: other[Object.keys(other)[2]].front_default,
						types,
					});
				});
			});
		});
	},
};
</script>
