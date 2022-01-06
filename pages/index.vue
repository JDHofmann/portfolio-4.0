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
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>
