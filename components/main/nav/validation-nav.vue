<template>
	<div>
		<h3 @click="dropdown">
			Validations
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in validationPages" :key="index" class="sidebar__item">
				<nuxt-link class="sidebar__link" :to="`/validations/basic/${page}`">
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
			validationPages: [
				'creditcard',
				'date',
				'email',
				'equalto',
				'max',
				'maxlength',
				'min',
				'minlength',
				'notequalto',
				'number',
				'phone',
				'postalcode',
				'required',
				'text',
				'url',
				'vat'
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