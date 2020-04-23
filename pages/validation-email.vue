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
				name: 'email',
				type: 'email',
				validation: [
					{
						name: 'email'
					}
				]
			},
			{
				name: 'email2',
				type: 'text',
				validation: [
					{
						name: 'email'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>