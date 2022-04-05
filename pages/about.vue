<template>
	<main>
		<div class="hero">
			<h1>About</h1>
		</div>
		<section>
			<p>{{ biography }}</p>
			<img :src="photo.url" :alt="photo.alt" />
		</section>
	</main>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			photo: (state) => state.author[0].photo,
			biography: (state) => state.author[0].biography,
		}),
	},

	mounted() {
		// console.log(this.photo);
	},
};
</script>
<style scoped>
img {
	width: 80%;
	margin: 2rem 10%;
}
</style>
