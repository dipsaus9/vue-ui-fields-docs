<template>
	<section>
		<h1>Validation - Notequalto</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="notequalto" class="notequalto" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('notequalto');

		this.$uiFields.setFields('notequalto', [
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
						name: 'notEqualTo',
						options: () => this.$uiFields.getValue('notequalto', 'value1')
					}
				]
			},
			{
				name: 'value3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'notEqualTo',
						options: () => this.$uiFields.getValue('notequalto', 'value1')
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('notequalto');
	}
};
</script>