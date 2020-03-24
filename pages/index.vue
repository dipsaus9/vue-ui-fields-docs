<template>
	<form data-vv-scope="uiFields" @submit.prevent="submit">
		<uiFields name="checkout" class="tte" />
		<button type="submit">
			Submit
		</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			submitted: false
		};
	},
	mounted() {
		this.$uiFields.new('checkout');
		this.$uiFields.setFields('checkout', [
		]);
		this.$uiFields.setFields('checkout', [
			{
				label: 'Enter your first name',
				name: 'password',
				autocomplete: 'given-name',
				type: 'text',
				placeholder: 'What is your first name',
				validation: [{
					name: 'custom',
					validation(val) {
						return val === 'hoi';
					},
					message: () => 'ik wil hoi als antwoord'
				}]
				// validation: ['required', 'email', { name: 'minlength', options: 5, message: (value) => `${value.length} is nog niet voldoende ` } ]
			},
			{
				label: 'Enter your last name',
				name: 'passwordRepeat',
				autocomplete: 'additional-name',
				type: 'text',
				placeholder: 'test 2',
				classes: ['asdfasdf']
			},
			// {
			// 	label: 'Enter your address',
			// 	name: 'address',
			// 	autocomplete: 'street-address',
			// 	type: 'text',
			// 	validation: ['required']
			// },
			// {
			// 	label: 'Enter your country',
			// 	name: 'country',
			// 	autocomplete: 'country',
			// 	type: 'radio',
			// 	validation: ['required'],
			// 	options: [
			// 		{
			// 			label: 'Select something',
			// 			value: ''
			// 		},
			// 		{
			// 			label: 'Nederland',
			// 			value: 'NL'
			// 		},
			// 		{
			// 			label: 'Duitsland',
			// 			value: 'DE'
			// 		}
			// 	]
			// }
		]);

	},
	methods: {
		async submit() {
			this.submitted = true;
			// this.$uiFields.setError('checkout', 'password', 'Nie goed he');
			console.log(this.$uiFields.validate('checkout'));
			// const result = await this.$uiFields.getFields('checkout');
			// console.log(result);
			// if (result.valid) {
			// 	this.$uiFields.setError({
			// 		formName: 'custom-errors',
			// 		fieldIndex: 'custom_error',
			// 		message: 'You have succesfully pushed this form'
			// 	});
			// 	setTimeout(() => {
			// 		this.$uiFields.removeError({
			// 			formName: 'custom-errors',
			// 			fieldIndex: 'custom_error',
			// 			message: 'You have succesfully pushed this form'
			// 		});
			// 	}, 2000);
			// }
		}
	}
};
</script>
<style lang="scss">
@import '~tools';
form {
	display: flex;
	margin: rem(100) auto;
	flex-direction: column;
	width: grid(14);
}
h1 {
	font-size: grid(1);
}
.uiFields__fieldset {
	margin: 50px 0;
}
</style>
