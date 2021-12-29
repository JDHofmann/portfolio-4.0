<template>
	<div>
		<h1>{{ project.name }}</h1>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["projects"]),
		project() {
			return this.projects.find((p) => p.id == this.$route.params.id);
		},
	},

	mounted() {},
};
</script>
