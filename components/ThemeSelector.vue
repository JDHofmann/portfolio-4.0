<template>
	<section>
		<button @click="changeTheme('blue-theme')">Blue Theme</button>

		<button @click="changeTheme('red-theme')">Red Theme</button>
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
	border: 1px solid #ffffff;
	color: #ffffff;
	padding: 0.5rem 1rem;
}
</style>
