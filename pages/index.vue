<template>
	<form data-vv-scope="uiFields">
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
				placeholder: 'Enter your first name',
				reequired: true,
				errors: {
					validation: 'required',
					message: 'This field is required',
					veeValidateScope: 'uiFields'
				}
			},
			{
				depth: 'personalInfo',
				name: 'last_name',
				placeholder: 'Enter your last name',
				required: true,
				errors: {
					validation: 'required',
					message: 'This field is required',
					veeValidateScope: 'uiFields'
				}
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
	},
	mounted() {
		this.$store.dispatch('uiFields/setNewForm', this.uiFields.getFieldSettings());
	}
};
</script>
