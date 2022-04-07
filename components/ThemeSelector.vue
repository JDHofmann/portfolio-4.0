<template>
	<div class="content-wrapper theme-selector">
		<section>
			<!-- <details> -->
			<div id="theme-selector">
				<button @click="changeTheme('seventies-theme')" class="tooltip">
					Seventies
					<span class="tooltiptext">Seventies</span>
				</button>

				<button @click="changeTheme('sunset-theme')" class="tooltip">
					Sunset
					<span class="tooltiptext">Sunset</span>
				</button>

				<button @click="changeTheme('southwest-theme')" class="tooltip">
					Southwest
					<span class="tooltiptext">Southwest</span>
				</button>
			</div>
			<!-- </details> -->
		</section>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	methods: {
		...mapActions(["changeTheme"]),
	},
};
</script>

<style scoped lang="scss">
section {
	padding: 0;
}
span {
	text-align: center;
}
#theme-selector {
	display: flex;
	flex-direction: column;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.75rem 0.5rem;
	justify-content: space-around;
	place-items: center;
	padding: 0.75rem 1rem;
	button {
		padding: 0.25rem 4vw;
		font-size: 0.9rem;
		// width: clamp(50px, 100%, 200px);
		// font-weight: 700;
	}
}

@media (min-width: 768px) {
	#theme-selector {
		flex-direction: row;
		flex-wrap: wrap;
		button {
			padding: 0.5rem 5vw;
			font-size: 0.9rem;
			// width: clamp(50px, 100%, 200px);
			// font-weight: 700;
		}
	}
}
</style>
