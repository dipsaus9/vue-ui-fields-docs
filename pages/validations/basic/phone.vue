<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Phone
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks the input field if it is a valid phonenumber. if you put text instead of a number it is not valid.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
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
	}
};
</script>