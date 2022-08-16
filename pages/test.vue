<template>
	<div id="container">
		<p>test</p>
		<svg width="500" height="500">
			<filter id="lava" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.04"
					result="noise"
					numOctaves="5"
				/>
				<feDiffuseLighting
					in="noise"
					lighting-color="#ffffff"
					surfaceScale="17"
				>
					<!-- <feDistantLight azimuth="45" elevation="60" /> -->
					<fePointLight x="70" y="130" z="90" />
				</feDiffuseLighting>
			</filter>
			<rect
				x="0"
				y="0"
				width="100%"
				height="100%"
				filter="url(#lava)"
				opacity=".5"
			/>
		</svg>
		<svg width="500" height="500">
			<filter id="lava2" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.01"
					result="noise"
					numOctaves="9"
				/>
				<feDiffuseLighting
					in="noise"
					lighting-color="#fffff"
					surfaceScale="17"
				>
					<!-- <feDistantLight azimuth="45" elevation="60" /> -->
					<fePointLight x="370" y="430" z="90" />
				</feDiffuseLighting>
			</filter>

			<rect
				x="0"
				y="0"
				width="100%"
				height="100%"
				filter="url(#lava2)"
				opacity=".6"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: "test",
};
</script>

<style scoped>
#container {
	width: 100vw;
	height: 1000vh;
	background: #202020;
}
svg {
	margin-bottom: 10px;
}
</style>
