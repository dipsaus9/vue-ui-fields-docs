<template>
	<section>
		<h1> Example - Signup username </h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="login-details" class="login-details" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('login-details');

		this.$uiFields.setFields('login-details', [
			{
				name: 'username',
				type: 'text',
				label: 'Username',
				validation: [
					{
						name: 'minlength',
						options: 8
					},
					{
						name: 'maxlength',
						options: 30
					},
					{
						name: 'required'
					},
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
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'password1')
					},
					{
						name: 'required'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>