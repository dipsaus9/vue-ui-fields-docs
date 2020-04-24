<template>
	<section>
		<h1> Validation - Equal to</h1>
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
				name: 'value1',
				type: 'text',
				label: 'Value to compare with'
			},
			{
				name: 'value2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'value1')
					}
				]
			},
			{
				name: 'value3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'value1')
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