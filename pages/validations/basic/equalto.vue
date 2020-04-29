<template>
	<section>
		<h1>Validation - Equal to</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="equalto" class="equalto" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('equalto');

		this.$uiFields.setFields('equalto', [
			{
				name: 'value1',
				type: 'text',
				label: 'Value to compare with'
			},
			{
				name: 'value2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('equalto', 'value1')
					}
				]
			},
			{
				name: 'value3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('equalto', 'value1')
					},
					{
						name: 'number'
					}
				]
			}
		]);
	}
};
</script>