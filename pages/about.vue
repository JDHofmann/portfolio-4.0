<template>
	<div>
		<h1>About</h1>
		<p>{{ biography }}</p>
		<img :src="photo.url" :alt="photo.alt" />
	</div>
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
