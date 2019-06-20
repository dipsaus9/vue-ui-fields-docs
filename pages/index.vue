<template>
	<form data-vv-scope="uiFields" @submit.prevent="sub">
		<ui-fields field-name="checkout" />
		<button type="submit" name="button"></button>
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
		this.uiFields = this.createNewUiFieldsInstance({
			key: 'checkout',
			container: {
				classes: 'checkout'
			}
		});
		this.uiFields.setFieldSet({
			key: 'personalInfo',
			container: {
				classes: ['personal', 'extra-large']
			}
		});

		this.uiFields.setField([
			{
				depth: 'personalInfo',
				name: 'first_name',
				type: 'text',
				placeholder: 'Enter your first name'
			},
			{
				depth: 'personalInfo',
				name: 'last_name',
				type: 'text',
				placeholder: 'Enter your last name',
				required: true
			},
			{
				depth: 'personalInfo',
				name: 'list',
				placeholder: 'Enter your last name',
				label: 'hoi'
			}
		]);

		this.uiFields.setNewCondition({
			key: 'last_name',
			depth: 'personalInfo',
			condition: {
				key: 'first_name',
				value(val) {
					return val.length;
				}
			}
		});

		this.uiFields.finishForm();
	},
	methods: {
		async sub() {
			const valid = await this.$validator.validate('uiFields.*');
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
</style>
