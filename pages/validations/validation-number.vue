<template>
	<section>
		<h1> Validation - Number</h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="validation" class="validation" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('validation');

		this.$uiFields.setFields('validation', [
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
						name: 'number'
					},
					{
						name: 'required'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>