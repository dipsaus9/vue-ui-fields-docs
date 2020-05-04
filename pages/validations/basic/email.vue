<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				E-mail
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to validate a email in an input field you can use the email validation.
				This validation checks if the input value contains a monkeytail (@) and a dot (.).
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="email" class="email" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('email');

		this.$uiFields.setFields('email', [
			{
				name: 'email1',
				type: 'text',
				label: 'Validation in array',
				validation: ['email']
			},
			{
				name: 'email2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'email'
					}
				]
			},
			{
				name: 'email3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'email'
					}
				]
			}
		]);
	}
};
</script>