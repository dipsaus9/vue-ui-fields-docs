<template>
	<section>
		<h1>Validation - Required</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="required" class="required" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('required');

		this.$uiFields.setFields('required', [
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
	},
	destroy() {
		this.$uiFields.new('required');
	}
};
</script>

<style lang="scss">

</style>