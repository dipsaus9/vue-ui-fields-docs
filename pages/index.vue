<template>
	<ui-fields field-name="checkout" />
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
				errors: {
					validation: 'required',
					message: 'This field is required'
				}
			},
			{
				depth: 'personalInfo',
				name: 'last_name',
				placeholder: 'Enter your last name',
				errors: {
					validation: 'required',
					message: 'This field is required'
				}
			}
		]);
	},
	mounted() {
		this.$store.dispatch('uiFields/setNewForm', this.uiFields.getFieldSettings());
	}
};
</script>
