<template>
	<section>
		<h1> Validation - Maxlength</h1>
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
				name: 'maxlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'maxlength',
						options: 4
					}
				]
			},
			{
				name: 'maxlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'maxlength',
						options: 4
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