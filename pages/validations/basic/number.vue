<template>
	<section>
		<h1>Validation - Number</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="number" class="number" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('number');

		this.$uiFields.setFields('number', [
			{
				name: 'number1',
				type: 'text',
				label: 'Validation in array',
				validation: ['number']
			},
			{
				name: 'number2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'number'
					}
				]
			},
			{
				name: 'number3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'number'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('number');
	}
};
</script>