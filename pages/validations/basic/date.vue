<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Date (In progress)
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to validate a date in an input field you can use the date validation.
				The validation checks if the date has enough characters and if it is a number.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
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