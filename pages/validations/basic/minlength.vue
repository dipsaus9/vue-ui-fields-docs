<template>
	<section>
		<h1>Validation - Minlength</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="minlength" class="minlength" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('minlength');

		this.$uiFields.setFields('minlength', [
			{
				name: 'value1',
				type: 'text',
				label: 'Min length of value (Number)'
			},
			{
				name: 'minlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'minlength',
						options: () => this.$uiFields.getValue('minlength', 'value1')
					}
				]
			},
			{
				name: 'minlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'minlength',
						options: () => this.$uiFields.getValue('minlength', 'value1')
					}
				]
			}
		]);
	}
};
</script>