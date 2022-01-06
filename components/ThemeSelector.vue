<template>
	<section>
		<button @click="changeTheme('mightnight-theme')">Midnight Theme</button>

		<button @click="changeTheme('southwest-theme')">Southwest Theme</button>

		<button @click="changeTheme('seventies-theme')">Seventies Theme</button>
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
section {
	display: flex;
	justify-content: space-evenly;
}
button {
	// border: 1px solid;
	padding: 0.5rem 1rem;
}
</style>
