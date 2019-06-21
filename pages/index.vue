<template>
	<form data-vv-scope="uiFields" @submit.prevent="sub">
		<ui-fields field-name="checkout" />
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
			name: 'personalInfo',
			classes: ['personal', 'extra-large']
		});

		uiFields.setFieldset({
			name: 'personalInfo2',
			classes: ['personal', 'extra-large']
		});

		uiFields.setFieldsetClassesAll('nog meer');

		uiFields.setFields([
			{
				fieldsetName: 'personalInfo',
				label: 'Wow awesome label you got there',
				name: 'first_name',
				props: {
					autocomplete: 'on'
				},
				type: 'text',
				max: 500,
				maxlength: 500,
				min: 5,
				minlength: 5,
				multiple: true,
				placeholder: 'test',
				required: true,
				classes: ['asdfasdf'],
				step: 10,
				persistent: false
			},
			{
				fieldsetName: 'personalInfo2',
				label: 'Wow awesome label you got there',
				name: 'last_name',
				props: {
					autocomplete: 'on'
				},
				type: 'text',
				max: 500,
				maxlength: 500,
				min: 5,
				minlength: 5,
				multiple: true,
				placeholder: 'test',
				required: true,
				classes: ['asdfasdf'],
				step: 10,
				persistent: false
			},
			{
				fieldsetName: 'personalInfo2',
				label: 'Wow awesome label you got there',
				name: 'third_name',
				props: {
					autocomplete: 'on'
				},
				type: 'text',
				max: 500,
				maxlength: 500,
				min: 5,
				minlength: 5,
				multiple: true,
				placeholder: 'test',
				required: true,
				classes: ['asdfasdf'],
				step: 10,
				persistent: false
			}
			// {
			// 	fieldsetName: 'personalInfo',
			// 	label: 'Wow awesome label you got there',
			// 	name: 'test',
			// 	type: 'select',
			// 	required: true,
			// 	options: [
			// 		{
			// 			label: 'test',
			// 			value: 'test'
			// 		},
			// 		{
			// 			label: 'test2',
			// 			value: 'test2',
			// 			price: 100
			// 		}
			// 	]
			// }
		]);
		uiFields.setNewCondition({
			dependent: {
				fieldsetName: 'personalInfo',
				fieldName: 'first_name'
			},
			fieldsetName: 'personalInfo2',
			condition: (val) => {
				console.log(val);
				return val === 'test';
			}
		});

		uiFields.finishForm();
	},
	mounted() {
		this.$store.dispatch('uiFields/updateFieldValue', {
			formName: 'checkout',
			fieldsetIndex: 'personalInfo',
			fieldIndex: 'first_name',
			value: 'wow'
		});
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
</style>
