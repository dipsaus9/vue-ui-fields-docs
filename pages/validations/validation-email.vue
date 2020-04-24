<template>
	<section>
		<h1> Validation - Email</h1>
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
				name: 'email1',
				type: 'text',
				label: 'Validation in array',
				validation: ['email']
			},
			{
				name: 'email2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'email'
					}
				]
			},
			{
				name: 'email3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'email'
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