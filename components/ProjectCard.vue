<template>
	<li>
		<NuxtLink :to="`/projects/${id}`">
			<h2>{{ name }}</h2>
		</NuxtLink>
	</li>
</template>

<script>
export default {
	name: "ProjectCard",
	props: {
		name: {
			type: String,
		},
		id: {
			type: Number,
		},
	},
	mounted() {
		console.log(this.id);
	},
};
</script>
<style scoped>
li {
	list-style: none;
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
}
</style>
