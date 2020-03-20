<template>
	<form data-vv-scope="uiFields" @submit.prevent="submit">
		<ui-fields field-name="checkout" />
		<ui-errors field-name="custom-errors" />
		<button type="submit">
			Submit
		</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			uiFields: null,
			submitted: false
		};
	},
	created() {
		const uiFields = this.$uiFields.new({
			name: 'checkout',
			classes: 'checkout'
		});
		uiFields.setFieldset({
			name: 'personalInfo'
		});

		uiFields.setFieldsetClassesAll('personalInfo');

		uiFields.setFields([
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your first name',
				name: 'password',
				autocomplete: 'given-name',
				type: 'password',
				placeholder: 'What is your first name',
				validation: ['required']
				// validation: [
				// 	{
				// 		name: 'url',
				// 		options: () => {
				// 			return this.getCorrectField({
				// 				formName: 'checkout',
				// 				fieldsetName: 'personalInfo',
				// 				fieldName: 'last_name'
				// 			})
				// 		},
				// 		message: () => 'min 10 man'
				// 	}
				// ]
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your last name',
				name: 'passwordRepeat',
				autocomplete: 'additional-name',
				type: 'password',
				placeholder: 'test 2',
				validation: [
					'required',
					{
						name: 'equalTo',
						options: () => {
							return this.getCorrectField({
								formName: 'checkout',
								fieldsetName: 'personalInfo',
								fieldName: 'password'
							});
						}
					}
				],
				classes: ['asdfasdf']
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your address',
				name: 'address',
				autocomplete: 'street-address',
				type: 'text',
				validation: ['required']
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your country',
				name: 'country',
				autocomplete: 'country',
				type: 'radio',
				validation: ['required'],
				options: [
					{
						label: 'Select something',
						value: ''
					},
					{
						label: 'Nederland',
						value: 'NL'
					},
					{
						label: 'Duitsland',
						value: 'DE'
					}
				]
			}
		]);

		uiFields.finishForm();
	},
	methods: {
		async submit() {
			this.submitted = true;
			const result = await this.$uiFields.validate('checkout');
			if (result.valid) {
				this.$uiFields.setError({
					formName: 'custom-errors',
					fieldIndex: 'custom_error',
					message: 'You have succesfully pushed this form'
				});
				setTimeout(() => {
					this.$uiFields.removeError({
						formName: 'custom-errors',
						fieldIndex: 'custom_error',
						message: 'You have succesfully pushed this form'
					});
				}, 2000);
			}
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
