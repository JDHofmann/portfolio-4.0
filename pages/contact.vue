<template>
	<main class="contact content-wrapper">
		<div class="hero">
			<h1>Contact</h1>
		</div>
		<section class="links">
			<a :href="`mailto:${email}`">Email</a>
			<a v-for="(link, i) in links" :key="i" :href="link.url">{{
				link.name
			}}</a>
		</section>
	</main>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			email: (state) => state.author[0].email,
			links: (state) => state.author[0].links,
		}),
	},

	mounted() {},
};
</script>
<style scoped>
.links a {
	display: block;
	padding: 1rem 0;
	font-size: 1.2rem;
}
</style>
