<template>
	<div>
		<h1>Contact</h1>
		<a :href="`mailto:${email}`">Email</a>
		<ul v-for="(link, i) in links" :key="i">
			<li>{{ link.name }}</li>
		</ul>
	</div>
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

	mounted() {
		// console.log(this.email);
		// this.email = this.author[0].email;
		// this.links = this.author[0].links;
	},
};
</script>
