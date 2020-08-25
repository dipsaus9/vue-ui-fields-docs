<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Conditions
				</h1>
				<p>
					When creating larger forms there is often a need for conditional
					fields. For example in a checkout you want to ship your product to a
					different address. Vue UI Fields gives you the opportunity to toggle
					fields or forms based on logic. By using conditions you can create
					complex forms with just a single line of code.
				</p>
				<p>
					A condition is dependent of a form, a field and its value and the form
					you want to toggle. You can toggle a form or a field with the last 2
					parameters.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ start }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>
					setCondition
				</h2>
				<p>
					The set condition can contain 4 variables, 3 required, 1 optional.
				</p>
				<h3>
					Dependent form
				</h3>
				<p>
					The first paramater is the form the field is located in. This is
					important so UI Fields knows where to look
				</p>
				<h3>
					Dependent field
				</h3>
				<p>
					The second paramater is the field where the value is dependent of.
				</p>
				<h3>
					Value
				</h3>
				<p>
					The third value contains the value the field needs to contain to
					enable the form you want to toggle. This can be either a value or a
					function.
				</p>
				<h3>
					Form
				</h3>
				<p>
					The fourth paramater is the form you want to toggle. If the value
					returns true this form will be visible
				</p>
				<h3>
					Field
				</h3>
				<p>
					The last parameter is optional. If you want to toggle a single field
					instead of a form you can add the option. The field has to be in the
					form of the 4th paramater.
				</p>
				<h3>Example</h3>
				<p>
					As described above we can show a new part of a form depending on a
					value by the user.
				</p>
				<CodeToggle :code="example" name="checkout" />
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			start: `this.$uiFields.setCondition(
	'Your_form_name',
	'Your_field_name',
	'The_value',
	'The_form_you_want_to_toggle',
	'The_field_you_want_to_toggle' //optional
);`,
			example: `this.$uiFields.new('checkout');
this.$uiFields.setFields('checkout', [
	{
		name: 'optional_value',
		type: 'checkbox',
		options: [
			{
				value: 'true',
				label: 'Do you want to ship your order to a different address?'
			}
		]
	},
	{
		name: 'shipping_address',
		label: 'Address',
		type: 'text'
	}
]);

this.$uiFields.setCondition(
	'checkout',
	'optional_value',
	(val) => {
		if (Array.isArray(val)) {
			return val.includes('true');
		}
		return false;
	},
	'checkout',
	'shipping_address'
);
`,
		};
	},
};
</script>
