<template>
	<li class="no-background">
		<NuxtLink :to="`/projects/${id}`">
			<div class=""></div>
			<img :src="thumbnail" alt="" />
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
		thumbnail: {
			type: String,
			default:
				"https://media.istockphoto.com/photos/the-anvil-morning-mist-picture-id535499464?b=1&k=20&m=535499464&s=170667a&w=0&h=JOKbtcOwVAYSVp3tB_MYIupW4HXVinQFdz0vY2CLMBU=",
		},
	},
	mounted() {
		// console.log(this.id);
	},
};
</script>
<style scoped>
h2 {
	text-align: center;
}
li {
	list-style: none;
	/* border: 1px solid; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 80px 0;
	padding: 1rem 0;
}
img {
	box-shadow: none;
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 50%;
}
</style>
