<template>
	<section>
		<h1>Validation - Maxlength</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="maxlength" class="maxlength" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('maxlength');

		this.$uiFields.setFields('maxlength', [
			{
				name: 'value1',
				type: 'text',
				label: 'Max length of value (Number)'
			},
			{
				name: 'maxlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'maxlength',
						options: () => this.$uiFields.getValue('maxlength', 'value1')
					}
				]
			},
			{
				name: 'maxlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'maxlength',
						options: () => this.$uiFields.getValue('maxlength', 'value1')
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('maxlength');
	}
};
</script>