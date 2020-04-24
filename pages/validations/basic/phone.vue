<template>
	<section>
		<h1>Validation - Phone</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="phone" class="phone" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('phone');

		this.$uiFields.setFields('phone', [
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
						name: 'required'
					},
					{
						name: 'phone',
						options: 'nl-NL'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('phone');
	}
};
</script>

<style lang="scss">

</style>