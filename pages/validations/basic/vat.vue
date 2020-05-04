<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				VAT
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the input value is a valid VAT-number. There are a lot of different numbers in different countries so if you put only a number with the Dutch settings it gives an error.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="vat" class="vat" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('vat');

		this.$uiFields.setFields('vat', [
			{
				name: 'vat1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'vat',
						options: 'NL'
					}
				]
			},
			{
				name: 'vat2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'vat',
						options: 'NL'
					}
				]
			}
		]);
	}
};
</script>