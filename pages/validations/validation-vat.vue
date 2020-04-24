<template>
	<section>
		<h1> Validation - VAT</h1>
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
				name: 'vat1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'vat',
						options: ['NL', 'BE']
					}
				]
			},
			{
				name: 'vat2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'vat',
						options: ['NL', 'BE']
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