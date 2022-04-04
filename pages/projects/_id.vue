<template>
	<main class="project-page">
		<div class="hero">
			<h1>{{ project.name }}</h1>
			<p>{{ project.subhead }}</p>
		</div>
		<p class="description">{{ project.description }}</p>

		<section v-if="!project.iframes">
			<h2>Images</h2>
			<div id="project-images" class="images">
				<div v-for="(img, i) in project.images" :key="i">
					<h3>{{ img.title }}</h3>
					<img :src="img.path" :alt="img.title" />
				</div>
			</div>
		</section>
		<section v-if="project.iframes">
			<h2>Animated Ads</h2>
			<div id="project-images">
				<div v-for="(iframe, i) in project.iframes" :key="i">
					<h3>{{ iframe.title }}</h3>
					<iframe
						:src="iframe.path"
						frameborder="0"
						:width="iframe.width"
						:height="iframe.height"
					></iframe>
				</div>
			</div>
		</section>
		<section class="links" v-if="project.links">
			<h2>Links</h2>
			<ul>
				<li v-for="(link, i) in project.links" :key="i">
					<a :href="link.path">{{ link.title }}</a>
				</li>
			</ul>
		</section>
	</main>
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

<style scoped lang="scss">
.hero {
	p {
		font-size: 18px;
		padding: 0.25rem 0 1rem;
	}
}
// #project-images {
// 	display: flex;
// 	justify-content: space-evenly;
// 	flex-wrap: wrap;
// 	display: grid;
// 	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
// 	// align-items: end;
// 	justify-items: center;
// 	grid-column-gap: 1rem;
// 	grid-row-gap: 1rem;
// 	width: 100%;
// }
#project-iframes,
#project-images {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1rem;
}
#project-images div {
	padding: 1rem 2rem 2rem;
}
#project-images.images div {
	width: 80%;
	max-width: 400px;
}
#project-images img {
	width: 100%;
	border: 1px solid;
}
iframe {
	background: #ffffff;
}
h3 {
	padding: 0.5rem 0;
	border-bottom: 1px solid;
}
</style>
