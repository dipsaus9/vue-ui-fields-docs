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
				name: 'postalcode1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'postalcode',
						options: 'NL'
					}
				]
			},
			{
				name: 'postalcode2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'postalcode',
						options: 'NL'
					},
					{
						name: 'required'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>