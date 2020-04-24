<template>
	<section>
		<h1> Validation - Creditcard</h1>
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
						name: 'creditcard'
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