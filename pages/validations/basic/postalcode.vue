<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Postalcode
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks of the postalcode is valid.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="postalcode" class="postalcode" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('postalcode');

		this.$uiFields.setFields('postalcode', [
			{
				name: 'postalcode1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'postalcode',
						options: 'NL'
					}
				]
			},
			{
				name: 'postalcode2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'postalcode',
						options: 'NL'
					}
				]
			}
		]);
	}
};
</script>