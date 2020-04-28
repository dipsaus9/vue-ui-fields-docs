<template>
	<section>
		<h1>Validation - Postalcode</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="postalcode" class="postalcode" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('postalcode');

		this.$uiFields.setFields('postalcode', [
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
						name: 'required'
					},
					{
						name: 'postalcode',
						options: 'NL'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('postalcode');
	}
};
</script>