<template>
	<section>
		<h1> Example - Password </h1>
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
				label: 'Email',
				validation: [
					{
						name: 'email'
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
					// {
					// 	name: 'creditcard'
					// },
					// {
					// 	name: 'date'
					// },
					// {
					// 	name: 'email'
					// },
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'password1')
					},
					// {
					// 	name: 'max',
					// 	options: 9999999999
					// },
					// {
					// 	name: 'maxlength',
					// 	options: 10
					// },
					// {
					// 	name: 'min',
					// 	options: 999999999
					// },
					// {
					// 	name: 'minlength',
					// 	options: 10
					// },
					// {
					// 	name: 'notEqualTo',
					// 	options: () => this.$uiFields.getValue('validation', 'value1')
					// }
					// {
					// 	name: 'postalcode',
					// 	options: ['NL']
					// },
					{
						name: 'required'
					},
					// {
					// 	name: 'url'
					// },
					// {
					// 	name: 'vat'
					// }

				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>