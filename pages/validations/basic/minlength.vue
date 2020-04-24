<template>
	<section>
		<h1> Validation - Minlength</h1>
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
				name: 'minlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'minlength',
						options: 5
					}
				]
			},
			{
				name: 'minlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'minlength',
						options: 5
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