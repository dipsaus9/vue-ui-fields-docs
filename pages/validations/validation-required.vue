<template>
	<section>
		<h1> Validation - Required</h1>
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
				name: 'required1',
				type: 'text',
				label: 'Validation in array',
				validation: ['required']
			},
			{
				name: 'required2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'required3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'maxlength',
						options: 8
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>