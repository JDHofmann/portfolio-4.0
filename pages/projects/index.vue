<template>
	<main>
		<div class="hero">
			<h1>Projects</h1>
		</div>
		<section>
			<ul>
				<ProjectCard
					v-for="project in projects"
					:key="project.id"
					:id="project.id"
					:name="project.name"
				/>
			</ul>
		</section>
	</main>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Projects",
	computed: {
		...mapState(["projects"]),
	},
	mounted() {
		// console.log("anything", this.projects);
	},
};
</script>
