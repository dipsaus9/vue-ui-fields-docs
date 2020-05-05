<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Creditcard
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation is for creditcard numbers. If you give your creditcard number this validation checks if it is valid creditcard number.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="creditcard" class="creditcard" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('creditcard');

		this.$uiFields.setFields('creditcard', [
			{
				name: 'creditcard1',
				type: 'text',
				label: 'Validation in array',
				validation: ['creditcard']
			},
			{
				name: 'creditcard2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'creditcard'
					}
				]
			}
		]);
	}
};
</script>