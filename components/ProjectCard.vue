<template>
	<li class="no-background project-card">
		<NuxtLink :to="`/projects/${id}`" class="card-link">
			<div class=""></div>
			<img :src="thumbnail" alt="" />
			<h3>{{ name }}</h3>
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
h3 {
	text-align: center;
	padding: 1rem 0;
	font-size: 1rem;
}
li {
	list-style: none;
	/* border: 1px solid; */
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	height: 100%;
	width: 150px;
}
a {
	padding: 1rem 0;
	height: 100%;
}
img {
	box-shadow: none;
	width: 150px;
	height: 150px;
	object-fit: cover;
	border-radius: 50%;
}

@media (min-width: 1080px) {
	h2 {
		font-size: 1.2rem;
	}
	li {
		width: 200px;
	}
	a {
		height: 100%;
	}
	img {
		width: 200px;
		height: 200px;
	}
}
</style>
