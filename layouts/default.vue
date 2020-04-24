<template>
	<div class="layout layout-default">
		<div class="sidebar">
			<div>
				<h2>Basics</h2>
				<ul class="sidebar__links">
					<li v-for="(page, index) in basicPages" :key="index" class="sidebar__item">
						<nuxt-link class="sidebar__link" :to="`/validations/basic/${page}`">
							{{ page }}
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div>
				<h2>Complex</h2>
				<ul class="sidebar__links">
					<li v-for="(page, index) in complexPages" :key="index" class="sidebar__item">
						<nuxt-link class="sidebar__link" :to="`/validations/complex/${page}`">
							{{ page }}
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="page">
			<nuxt />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			basicPages: [
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
				'vat',
			],
			complexPages: [
				'signup-email',
				'signup-username',
				'signup-full'
			],
		};
	}
};
</script>

<style lang="scss">
</style>