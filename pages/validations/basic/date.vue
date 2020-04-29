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
				placeholder: 'DD/MM/YYYY',
				validation: ['date']
			},
			{
				name: 'date2',
				type: 'text',
				label: 'Validation as object in array',
				placeholder: 'DD/MM/YYYY',
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
				placeholder: 'DD/MM/YYYY',
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
	}
};
</script>