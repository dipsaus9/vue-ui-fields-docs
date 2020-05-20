<template>
	<div>
		<h3 @click="dropdown">
			Form Examples
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in examplePages" :key="index" class="sidebar__item">
				<nuxt-link class="sidebar__link" :to="`/validations/complex/${page}`">
					{{ page }}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	data() {
		return {
			examplePages: [
				'signup-email',
				'signup-username',
				'signup-full'
			],
			isOpen: false
		};
	},
	methods: {
		dropdown() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>