<template>
	<section>
		<h1> Validation - Phone</h1>
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
				name: 'phone1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'phone',
						options: 'nl-NL'
					}
				]
			},
			{
				name: 'phone2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'phone',
						options: 'nl-NL'
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