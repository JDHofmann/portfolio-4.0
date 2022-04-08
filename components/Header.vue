<template>
	<header id="menu-bar">
		<div id="static-items">
			<span id="logo">JDBH</span>
			<div id="menu-buttons">
				<button
					aria-haspopup="true"
					aria-expanded="false"
					data-toggle="dropdown"
					@click="showMenu"
					class="show-menu"
					:class="isActive ? 'hidden' : 'show'"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<button
					aria-haspopup="false"
					aria-expanded="true"
					data-toggle="dropdown"
					@click="closeMenu"
					class="hide-menu"
					:class="isActive ? 'show' : 'hidden'"
				>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>
		<div
			id="pop-out"
			:class="isActive ? 'show' : 'hidden'"
			role="menu"
			aria-hidden="true"
		>
			<nav>
				<ul>
					<li @click="closeMenu">
						<nuxt-link to="/"> home </nuxt-link>
					</li>
					<li @click="closeMenu">
						<nuxt-link to="/projects"> projects </nuxt-link>
					</li>
					<li @click="closeMenu">
						<nuxt-link to="/about"> about </nuxt-link>
					</li>
					<li @click="closeMenu">
						<nuxt-link to="/contact"> contact </nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		showMenu() {
			this.isActive = true;
			return this.isActive;
		},
		closeMenu() {
			this.isActive = false;
			return this.isActive;
		},
	},
	mounted() {
		// console.log('mounted')
	},
};
</script>

<style scoped lang="scss">
// header {
// 	// border-bottom: 1px solid;
// 	// margin: 0 1rem;
// 	margin: 0 $min-x-padding;
// }
#menu-bar {
	nav {
		padding: 10rem 0.5rem;
	}
	#logo {
		font-size: 1.2rem;
	}

	#static-items {
		background: inherit;
		position: relative;
		z-index: 51;
		// padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		#menu-buttons {
			padding: 0.5rem 0;
			height: 35px;

			button {
				background: none;
				width: 35px;
				height: 35px;
				font-size: 1rem;
				padding: 0.4rem;
				&.show {
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
				}
				&.show-menu {
					span {
						display: block;
						height: 1px;
						width: 100%;
						line-height: 0px;
						// background: #ffffff;
					}
				}
				&.hide-menu {
					&.show {
						display: block;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					span {
						display: block;
						height: 1px;
						line-height: 0px;
						width: 100%;
						// background: #ffffff;
					}
					span:nth-child(1) {
						transform: rotate(45deg) translate(2%);
					}
					span:nth-child(2) {
						transform: rotate(-45deg) translate(2%);
					}
				}
			}
		}
	}
	#pop-out {
		width: 100%;
		z-index: 50;
		position: absolute;
		left: 0;
		top: 51px;
		background: inherit;
		transition: 0s;

		nav ul li {
			margin: 1rem 0.5rem;
			text-align: center;
			padding: 0;
			border-radius: 10px;

			a {
				transition: 1s ease;

				padding: 0.75rem 1rem;
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
		&.hidden {
			display: block;
			top: -100%;
		}
	}
}

@media (min-width: 768px) {
	#menu-bar {
		display: flex;
		#static-items {
			width: 50%;

			#menu-buttons {
				display: none;
			}
		}
		#pop-out {
			display: block;
			padding: 10px 0;
			position: relative;
			top: 0;
			nav {
				padding: 0;
				ul {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					height: 40px;
					padding-right: 5vw;
					li {
						margin: 0 0 0 1rem;
						border-radius: 10px;
					}
				}
			}
		}
	}
}
</style>
