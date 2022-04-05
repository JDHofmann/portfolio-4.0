<template>
	<div :class="theme">
		<Header />
		<ThemeSelector />
		<Nuxt />
		<footer>
			<p>built by jd brewer-hofmann - 2022</p>
		</footer>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["theme"]),
	},
};
</script>
