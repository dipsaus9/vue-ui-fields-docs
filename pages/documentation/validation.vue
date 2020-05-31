<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Validation
				</h1>
				<p>
					UI Fields gives you the opportunity to validate al fields client side. Within UI Fields there are some validation options included from <code>validator.js</code>, others are just simpel validation rules. You can add multiple validation rules to a single field.
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>Validation</h2>
				<p>
					To enable validation you can add the validation option in the setField function descrbed in the
					<NuxtLink to="/documentation/set-field">
						Set Field(s)
					</NuxtLink>
					page.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ start }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					This example code add the required validation rule to the field. If the field is still empty after the blur event on the field the error message will show. All messages are defined but can be overwritten.
				</p>
				<h3>Messages</h3>
				<p>
					UI Fields error messages are included in dutch and english. If you want to change the message given after an error you can by changing the validation string to an object.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ startObject }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					The message can be a string or a function. The function contains two parameters, first the value of the input and secondly the field name.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ errorFunction }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h3>Options</h3>
				<p>
					Some validation rules need some extra data. For example the <code>min</code> validation. In this example the min value of the number input has to be 5.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ minValidation }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
			<h2>Validation options</h2>
</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			start: `this.$uiFields.setField('Your_form_name', 
	{
		name: 'Required_text_field',
		type: 'text',
		validation: [
			'required'
		]
	}
);`,
			startObject: `this.$uiFields.setField('Your_form_name', 
	{
		name: 'Required_text_field',
		type: 'text',
		validation: [
			{
				name: 'required',
				message: 'This field is required'
			}
		]
	}
);`,
			errorFunction: `this.$uiFields.setField('Your_form_name', 
	{
		name: 'Required_text_field',
		type: 'text',
		validation: [
			{
				name: 'required',
				message: (value, fieldName) => fieldName + ' is required' //Or in object notation ({ fieldName })
			}
		]
	}
);`,
			minValidation: `this.$uiFields.setField('Your_form_name', 
	{
		name: 'Number_field',
		type: 'number',
		validation: [
			{
				name: 'min',
				options: 5
			}
		]
	}
);`
		};
	}
};
</script>