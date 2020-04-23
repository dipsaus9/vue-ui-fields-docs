<template>
	<div class="layout layout-default">
		<div class="header">
			<nav class="nav">
				<nuxt-link class="nav__item" to="/">
					Home
				</nuxt-link>
				<nuxt-link class="nav__item" to="/filter">
					Filter
				</nuxt-link>
			</nav>
		</div>
		<nuxt />
	</div>
</template>

<style lang="scss">

.header {
	background-color: #DDDDDD;
	width: 100;
	margin-bottom: 2rem;
}
.nav {
	display: flex;
	width: auto;
	&__item {
		padding: 1rem;
		text-decoration: none;
		color: black;
		font-weight: 600;
		text-transform: uppercase;
	}
	&__item:hover {
		background-color: rgb(185, 185, 185)
	}
}
</style>