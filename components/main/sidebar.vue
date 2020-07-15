<template>
	<nav class="sidebar">
		<SubNav title="Start" :list="intro" :open="true" />
		<SubNav title="Documentation" :list="docs" :open="true" base="/documentation" />
		<SubNav title="Input options" :list="inputFields" base="/inputs" :open="false" />
		<SubNav title="Validation options" :list="validationPages" base="/validations" :open="false" />
		<SubNav title="Examples" :list="examples" base="/examples" :open="false" />
	</nav>
</template>

<script>
import SubNav from '~/components/main/sub-nav.vue';

export default {
	components: {
		SubNav
	},
	data() {
		return {
			intro: [
				{ name: 'Philosophy', url: 'Philosophy' }
			],
			docs: [
				{ name: 'Install', url: 'Install', children: [] },
				{ name: 'New form', url: 'new', children: [] },
				{ name: 'Set Field(s)', url: 'set-field', children: [
					{ name: 'name', url: '#name' },
					{ name: 'value', url: '#value' },
					{ name: 'type', url: '#type' },
					{ name: 'requiredText', url: '#required-text' },
					{ name: 'classes', url: '#classes' },
					{ name: 'datalist', url: '#datalist' },
					{ name: 'autocomplete', url: '#autocomplete' },
					{ name: 'disabled', url: '#disabled' },
					{ name: 'max', url: '#max' },
					{ name: 'min', url: '#min' },
					{ name: 'maxlength', url: '#maxlength' },
					{ name: 'multiple', url: '#multiple' },
					{ name: 'placeholder', url: '#placeholder' },
					{ name: 'required', url: '#required' },
					{ name: 'step', url: '#step' },
					{ name: 'maxUploadSize', url: '#max-upload-size' },
					{ name: 'persistent', url: '#persistent' },
					{ name: 'validation', url: '#validation' },
					{ name: 'options', url: '#selectoptions' }
				]},
				{ name: 'Validation', url: 'Validation', children: [
					{ name: 'messages', url: '#messages' },
					{ name: 'options', url: '#options' },
					{ name: 'custom', url: '#custom' }
				] },
				{ name: 'Conditions', url: 'Conditions', children: [] },
				{ name: 'Helper functions', url: 'Helpers', children: [] },
				{ name: 'Best practices', url: 'best-practices', children: [] },			],
			inputFields: [				{ name: 'Text', url: 'text', children: [] },
				{ name: 'Phone', url: 'phone', children: [] },				{ name: 'Date', url: 'date', children: [] },				{ name: 'Number', url: 'number', children: [] },
				{ name: 'Email', url: 'email', children: [] },
				{ name: 'Tel', url: 'tel', children: [] },
				{ name: 'Password', url: 'password', children: [] },
				{ name: 'Range', url: 'range', children: [] },				{ name: 'Hidden', url: 'hidden', children: [] },
				{ name: 'File', url: 'file', children: [] },
				{ name: 'Select', url: 'select', children: [] },
				{ name: 'Checkbox', url: 'checkbox', children: [] },
				{ name: 'Radio', url: 'radio', children: [] },
				{ name: 'Textarea', url: 'textarea', children: [] },
			],
			validationPages: [
				{ name: 'Creditcard', url: 'creditcard', children: [] },
				{ name: 'Date', url: 'date', children: [] },
				{ name: 'Email', url: 'email', children: [] },
				{ name: 'Equalto', url: 'equalto', children: [] },
				{ name: 'Max', url: 'max', children: [] },
				{ name: 'Maxlength', url: 'maxlength', children: [] },
				{ name: 'Min', url: 'min', children: [] },
				{ name: 'Minlength', url: 'minlength', children: [] },
				{ name: 'Notequalto', url: 'notequalto', children: [] },
				{ name: 'Number', url: 'number', children: [] },
				{ name: 'Phone', url: 'phone', children: [] },
				{ name: 'Postalcode', url: 'postalcode', children: [] },
				{ name: 'Required', url: 'required', children: [] },
				{ name: 'Text', url: 'text', children: [] },
				{ name: 'Url', url: 'url', children: [] },
				{ name: 'Vat', url: 'vat', children: [] },
			],
			examples: [
				{ name: 'Checkout shop', url: 'checkout', children: [] },
				{ name: 'Checkout shop 2', url: 'checkout-2', children: [] },
				{ name: 'Login email', url: 'login-email', children: [] },
				{ name: 'Login Username', url: 'login-username', children: [] },
				{ name: 'Signup', url: 'signup', children: [] }
			],
		};
	}
};
</script>