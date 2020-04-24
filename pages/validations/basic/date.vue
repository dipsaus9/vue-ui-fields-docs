<template>
	<section>
		<h1>Validation - Date</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="date" class="date" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('date');

		this.$uiFields.setFields('date', [
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
						name: 'required'
					},
					{
						name: 'date'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('date');
	}
};
</script>

<style lang="scss">

</style>