<template>
	<section>
		<h1> Validation - Postalcode</h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="validation" class="validation" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('validation');

		this.$uiFields.setFields('validation', [
			{
				name: 'postalcode',
				type: 'text',
				validation: [
					{
						name: 'postalcode',
						options: ['NL', 'BE', 'DE']
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>