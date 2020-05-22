<template>
	<div>
		<h3 @click="dropdown">
			Full forms
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
				'login-email',
				'login-username',
				'signup-full',
				'checkout',
				'checkout-different-address',
				'checkout-different-address-condition'
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