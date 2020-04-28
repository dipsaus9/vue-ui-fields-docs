<template>
	<section>
		<h1>Validation - Creditcard</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="creditcard" class="creditcard" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('creditcard');

		this.$uiFields.setFields('creditcard', [
			{
				name: 'creditcard1',
				type: 'text',
				label: 'Validation in array',
				validation: ['creditcard']
			},
			{
				name: 'creditcard2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'creditcard'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('creditcard');
	}
};
</script>