<template>
	<section>
		<h1>Validation - Max</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="max" class="max" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('max');

		this.$uiFields.setFields('max', [
			{
				name: 'max1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'max',
						options: 8
					}
				]
			},
			{
				name: 'max2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'max',
						options: 8
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('max');
	}
};
</script>

<style lang="scss">

</style>