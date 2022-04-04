<template>
	<div :class="theme">
		<Header />
		<ThemeSelector />
		<Nuxt />
		<footer>
			<p>built by jd brewer-hofmann 2022</p>
		</footer>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["theme"]),
	},
};
</script>

<style scoped>
/* h1 {
	color: #009999;
} */

button {
	border: 5px solid #ffffff;
}
</style>
