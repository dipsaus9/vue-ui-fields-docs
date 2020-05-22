<template>
	<div>
		<h3 @click="dropdown">
			Inputs
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in inputFields" :key="index" class="sidebar__item">
				<nuxt-link class="sidebar__link" :to="`/validations/inputs/${page}`">
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
			inputFields: [
				'text',
				'phone',
				'date',
				'number',
				'email',
				'tel',
				'password',
				'range',
				'hidden',
				'file',
				'select',
				'checkbox',
				'radio',
				'textarea'
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