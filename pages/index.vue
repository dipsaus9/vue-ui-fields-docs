<template>
	<form data-vv-scope="uiFields" @submit.prevent="submit">
		<ui-fields name="checkout" class="tte" />
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
			submitted: false,
			testValue: 'hoi'
		};
	},
	created() {
		const uiFields = this.$uiFields.new('checkout');

		uiFields.setFields([
			{
				label: 'Enter your first name',
				name: 'password',
				autocomplete: 'given-name',
				type: 'text',
				placeholder: 'What is your first name',
				validation: ['required'],
				required: true
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
				label: 'Enter your last name',
				name: 'passwordRepeat',
				autocomplete: 'additional-name',
				type: 'text',
				placeholder: 'test 2',
				validation: [
					'required',
					{
						name: 'equalTo',
						options: () => {
							return this.getCorrectField({
								form: 'checkout',
								field: 'password'
							});
						}
					}
				],
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

		this.$uiFields.subscribeField('checkout', 'passwordRepeat', this.test);
	},
	methods: {
		test(value, fieldName) {
			console.log(value, fieldName);
		},
		async submit() {
			this.submitted = true;
			const result = await this.$uiFields.getFields('checkout');
			console.log(result);
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
