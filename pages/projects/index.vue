<template>
	<div>
		<h1>Projects</h1>
		<ProjectCard
			v-for="project in projects"
			:key="project.id"
			:id="project.id"
			:name="project.name"
			:test="test"
		/>
	</div>
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
