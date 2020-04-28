<template>
	<section>
		<h1>Validation - Min</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="min" class="min" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('min');

		this.$uiFields.setFields('min', [
			{
				name: 'value1',
				type: 'text',
				label: 'Min value (Number)'
			},
			{
				name: 'min1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'min',
						options: () => this.$uiFields.getValue('min', 'value1')
					}
				]
			},
			{
				name: 'min2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'min',
						options: () => this.$uiFields.getValue('min', 'value1')
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('min');
	}
};
</script>