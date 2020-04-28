<template>
	<section>
		<h1>Validation - VAT</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="vat" class="vat" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('vat');

		this.$uiFields.setFields('vat', [
			{
				name: 'vat1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'vat',
						options: 'NL'
					}
				]
			},
			{
				name: 'vat2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'vat',
						options: 'NL'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('vat');
	}
};
</script>