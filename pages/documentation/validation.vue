<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Validation
				</h1>
				<p>
					UI Fields gives you the abbility to validate your form with the help
					of Vue. By adding some settings to your setField function you can
					create simple or complex validation rules to make sure your users
					won't submit wrong data. UI Fields uses a combination of
					<code>validator.js</code>, and native JS rules.
				</p>
				<p>
					All validation happens at the blur event of the input
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>Validation</h2>
				<p>
					To enable validation you can add the validation option in the setField
					function descrbed in the
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
					This example code add the required validation rule to the field. If
					the field is still empty after the blur event on the field the error
					message will show. All messages are defined but can be overwritten.
				</p>
				<h3 id="messages">
					Messages
				</h3>
				<p>
					UI Fields error messages are included in dutch and english. If you
					want to change the message given after an error you can by changing
					the validation string to an object.
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
					The message can be a string or a function. The function contains two
					parameters, first the value of the input and secondly the field name.
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
					Some validation rules need some extra data. For example the
					<code>min</code> validation. In this example the min value of the
					number input has to be 5.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ minValidation }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h2>Validation options</h2>
				<p>
					The predefined validation rules are:
				</p>
				<ul>
					<li><code>required</code> - False if empty</li>
					<li>
						<code>text</code> - False if contains something else then letters
					</li>
					<li><code>url</code> - False if no URL</li>
					<li>
						<code>vat</code> - False if not a valid VAT (needs country or
						<code>any</code>, can be string or array)
					</li>
					<li>
						<code>postalcode</code> - False if not a valid postalcode (needs
						country or <code>any</code>, can be string or array)
					</li>
					<li>
						<code>phone</code> - False if not a valid phonenumber (needs country
						or <code>any</code>, can be string or array)
					</li>
					<li><code>number</code> - False if not a number</li>
					<li>
						<NuxtLink to="#notequalto">
							<code>notequalto</code> - False if matching other field
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="#equalto">
							<code>equalto</code> - False if not matching other field
						</NuxtLink>
					</li>
					<li>
						<code>minlength</code> - False if less then minlength (needs
						minlength option)
					</li>
					<li><code>min</code> - False if less then min (needs min option)</li>
					<li>
						<code>maxlength</code> - False if more then maxlength (needs
						maxlength option)
					</li>
					<li><code>max</code> - False if more then max (needs max option)</li>
					<li>
						<code>includes</code> - False if value not in array (needs array as
						option)
					</li>
					<li><code>email</code> - False if not a valid email</li>
					<li><code>creditcard</code> - False if not a valid creditcard</li>
				</ul>
				<h3 id="notequalto">
					notequalto
				</h3>
				<p>
					This validation option is if you want to check if a field value is not
					the same as an other field. You can check this by passing the function
					of the other field.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ notequalto }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h3 id="equalto">
					equalto
				</h3>
				<p>
					This validation option is if you want to check if a field value is the
					same as an other field. You can check this by passing the function of
					the other field.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ equalto }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h2 id="custom">
					Custom
				</h2>
				<p>
					It is also possible to write your own custom validation. Custom
					validaiton requires all options to be added. For example this
					validation will only work when the value is matching the option passed
					into the validation.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ custom }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
			<div class="next">
				<NuxtLink to="/documentation/conditions">
					Conditions
				</NuxtLink>
			</div>
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
);`,
			notequalto: `this.$uiFields.setFields('Your_form_name', [
	{
		name: 'value1',
		type: 'text',
		label: 'Value 1',
	},
	{
		name: 'value2',
		type: 'text',
		label: 'Value 2',
		validation: [
			{
				name: 'notequalto',
				options: () => this.$uiFields.getValue('Your_form_name', 'value1')
			}
		]
	}
]);`,
			equalto: `this.$uiFields.setFields('Your_form_name', [
	{
		name: 'value1',
		type: 'text',
		label: 'Value 1',
	},
	{
		name: 'value2',
		type: 'text',
		label: 'Value 2',
		validation: [
			{
				name: 'equalto',
				options: () => this.$uiFields.getValue('Your_form_name', 'value1')
			}
		]
	}
]);`,
			custom: `this.$uiFields.setField('Your_form_name', 
	{
		name: 'value2',
		type: 'text',
		label: 'Value 2',
		validation: [
			{
				name: 'custom',
				options: 'test',
				message: 'Is not matching the validation',
				validation: (value, option) => value === option
			}
		]
	}
);`,
		};
	},
};
</script>
