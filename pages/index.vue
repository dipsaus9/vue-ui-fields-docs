<template>
	<form data-vv-scope="uiFields" @submit.prevent="submit">
		<ui-fields field-name="checkout" />
		<button type="submit">Submit</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			uiFields: null
		};
	},
	created() {
		const uiFields = this.createNewUiFieldsInstance({
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
				name: 'email',
				autocomplete: 'given-name',
				type: 'email',
				placeholder: 'What is your first name',
				required: true,
				validation: ['required', 'email']
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your last name',
				name: 'last_name',
				autocomplete: 'additional-name',
				type: 'text',
				maxlength: 10,
				minlength: 5,
				placeholder: 'test 2',
				required: true,
				classes: ['asdfasdf']
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your address',
				name: 'address',
				autocomplete: 'street-address',
				type: 'text',
				required: true
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Enter your country',
				name: 'country',
				autocomplete: 'country',
				type: 'select',
				options: [
					{
						label: 'Select something',
						selected: true,
						disabled: true,
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
				],
				required: true
			}
		]);
		// uiFields.setNewCondition({
		// 	dependent: {
		// 		fieldsetName: 'personalInfo',
		// 		fieldName: 'first_name'
		// 	},
		// 	fieldsetName: 'personalInfo2',
		// 	fieldName: 'third_name',
		// 	condition: (val) => {
		// 		return val === 'test';
		// 	}
		// });

		uiFields.finishForm();
	}
	// methods: {
	// 	submit() {
	// 		const result = await this.uiFields.validate('checkout');
	// 		if(!result){
	// 			console.log(' yeah fuck.. post the fucking thing.');
	// 			//post fucntion
	// 			.catch((error) => {
	// 				this.uiFields.addError('checkout', 'first_name', 'message')
	// 			});
	// 		}
	// 		console.log('submit dit eens');
	// 	}
	// }
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
</style>
