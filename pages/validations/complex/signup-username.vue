<template>
	<section>
		<h1> Example - Signup username </h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="login-details-username" class="login-details-username" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('login-details-username');

		this.$uiFields.setFields('login-details-username', [
			{
				name: 'username',
				type: 'text',
				label: 'Username',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'minlength',
						options: 8
					},
					{
						name: 'maxlength',
						options: 30
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
					}
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
	}
};
</script>