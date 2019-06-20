<template>
	<form data-vv-scope="uiFields" @submit.prevent="sub">
		<!-- <ui-fields field-name="checkout" /> -->
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

		uiFields.setFieldsetClassesAll('nog meer');

		uiFields.setFields([
			{
				fieldsetName: 'personalInfo',
				label: 'Wow awesome label you got there',
				name: 'first_name',
				type: 'text',
				autocomplete: 'on',
				disabled: true,
				max: 500,
				maxlength: 500,
				min: 5,
				minlength: 5,
				multiple: true,
				placeholder: 'test',
				required: true,
				classes: ['asdfasdf'],
				step: 10,
				hooks: () => {
					console.log('awesome');
				},
				persistent: false
			},
			{
				fieldsetName: 'personalInfo',
				label: 'Wow awesome label you got there',
				name: 'test',
				type: 'select',
				required: true,
				options: [
					{
						label: 'test',
						value: 'test'
					},
					{
						label: 'test2',
						value: 'test2',
						price: 100
					}
				]
			}
		]);
		console.log(uiFields.getFields());
		// uiFields.finishForm();
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
