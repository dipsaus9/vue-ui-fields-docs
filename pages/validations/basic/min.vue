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
				label: 'Min value (Number)',
				placeholder: '5',
				disabled: true
			},
			{
				name: 'min1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'min',
						options: 5
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
						options: 5
					}
				]
			}
		]);
	}
};
</script>