<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Number
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the value of the input fiels is a number.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="number" class="number" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('number');

		this.$uiFields.setFields('number', [
			{
				name: 'number1',
				type: 'text',
				label: 'Validation in array',
				validation: ['number']
			},
			{
				name: 'number2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'number'
					}
				]
			},
			{
				name: 'number3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'number'
					}
				]
			}
		]);
	}
};
</script>