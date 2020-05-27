<template>
	<div>
		<h3 @click="dropdown">
			Validation examples
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in validationPages" :key="index" class="sidebar__item">
				<NuxtLink class="sidebar__link" :to="`/validations/basic/${page}`">
					{{ page }}
				</NuxtLink>
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