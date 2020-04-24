<template>
	<section>
		<h1> Validation - Min</h1>
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
				name: 'min1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'min',
						options: 5
					}
				]
			},
			{
				name: 'min2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'min',
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