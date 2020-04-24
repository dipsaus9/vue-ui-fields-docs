<template>
	<section>
		<h1> Validation - Date</h1>
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
				name: 'date1',
				type: 'text',
				label: 'Validation in array',
				validation: ['date']
			},
			{
				name: 'date2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'date'
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