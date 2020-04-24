<template>
	<section>
		<h1> Example - Signup full </h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="login-details" class="login-details" component="fieldset" />
				<uiFields name="user-details" class="user-details" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('login-details');
		this.$uiFields.new('user-details');

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

		this.$uiFields.setFields('user-details', [
			{
				name: 'firstname',
				type: 'text',
				label: 'Firstname',
				validation: [
					{
						name: 'maxlength',
						options: 30
					},
					{
						name: 'minlength',
						options: 2
					},
					{
						name: 'required'
					},
					{
						name: 'text'
					}
				]
			},
			{
				name: 'surname',
				type: 'text',
				label: 'Surname',
				validation: [
					{
						name: 'maxlength',
						options: 50
					},
					{
						name: 'minlength',
						options: 2
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'email',
				type: 'text',
				label: 'E-mail',
				validation: [
					{
						name: 'email'
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'phonenumber',
				type: 'text',
				label: 'Phonenumber',
				validation: [
					{
						name: 'phone',
						options: ['nl-NL']
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'postalcode',
				type: 'text',
				label: 'Postalcode',
				validation: [
					{
						name: 'postalcode',
						options: ['NL']
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'address',
				type: 'text',
				label: 'Address',
				validation: ['required']
			},
			{
				name: 'city',
				type: 'text',
				label: 'City',
				validation: ['required']
			}
		]);
	}
};
</script>

<style lang="scss">

</style>