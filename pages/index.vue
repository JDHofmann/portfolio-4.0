<template>
	<main>
		<div class="hero">
			<h1>Home</h1>
		</div>
		<section>
			<ul>
				<ProjectCard
					v-for="project in projects"
					:key="project.id"
					:id="project.id"
					:name="project.name"
					:thumbnail="project.thumbnail"
				/>
			</ul>
		</section>
	</main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "IndexPage",
	computed: {
		...mapState(["projects", "theme"]),
	},
	methods: {
		...mapActions(["changeTheme"]),
	},
	mounted() {
		console.log(this.projects);
	},
};
</script>

<style scoped>
button {
	border: 5px solid #ffffff;
}
ul {
	padding-top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	place-items: center;
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: 1080px) {
	ul {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 2rem;
	}
}
</style>
