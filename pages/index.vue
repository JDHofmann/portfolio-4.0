<template>
	<div>
		<h1>Home</h1>
		<ul>
			<ProjectCard
				v-for="project in projects"
				:key="project.id"
				:id="project.id"
				:name="project.name"
			/>
		</ul>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "IndexPage",
	// components: "ProjectCard",
	computed: {
		...mapState(["projects"]),
	},
};
</script>

<style scoped>
/* h1 {
	color: #009999;
} */
</style>
