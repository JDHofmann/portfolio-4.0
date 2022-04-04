<template>
	<section id="theme-selector">
		<!-- <button @click="changeTheme('mightnight-theme')">Midnight Theme</button> -->

		<button @click="changeTheme('southwest-theme')">Southwest Theme</button>

		<button @click="changeTheme('seventies-theme')">Seventies Theme</button>

		<button @click="changeTheme('sunset-theme')">Sunset Theme</button>
	</section>
</template>

<script>
import { mapActions } from "vuex";

export default {
	methods: {
		...mapActions(["changeTheme"]),
	},
};
</script>

<style scoped lang="scss">
#theme-selector {
	display: grid;
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem 0.5rem;
	justify-content: space-around;
	// grid-template-columns: repeat(2, 1fr);
	place-items: center;
	// column-gap: 0.5rem;
	// row-gap: 0.75rem;
	padding: 0.75rem 1rem;
	// breakpoint add columns
}
@media (min-width: 617px) {
	#theme-selector {
		grid-template-columns: repeat(4, 1fr);
	}
}
button {
	padding: 0.5rem 1rem;
	font-size: 0.85rem;
	width: clamp(50px, 100%, 200px);
}
</style>
