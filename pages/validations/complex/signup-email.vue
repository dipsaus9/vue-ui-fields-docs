<template>
	<section>
		<h1>Example - Signup email </h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="login-details-email" class="login-details-email" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('login-details-email');

		this.$uiFields.setFields('login-details-email', [
			{
				name: 'username',
				type: 'text',
				label: 'Email',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'email'
					}
				]
			},
			{
				name: 'password1',
				type: 'password',
				label: 'Password 1',
				validation: [
					{
						name: 'minlength',
						options: 8
					},
					{
						name: 'maxlength',
						options: 20
					},
				]
			},
			{
				name: 'password2',
				type: 'password',
				label: 'Password 2',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'password1')
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('login-details-email');
	}
};
</script>