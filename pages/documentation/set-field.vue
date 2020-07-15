<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - setField(s)
				</h1>
				<p>
					After initing a new form you can add fields to the instance. You can do this by the prototype helper or directly on to the instance. If you are using the instance you don't have to add the first paramater. All functions can be used for a single object or an array of objects with the plural form of the function.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ setField }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					Or add more fields
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ setFields }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>Options</h2>
				<p>
					While creating a new field you can add some options for the component.
				</p>
				<ul>
					<li>
						<a href="#name">
							name
						</a>
					</li>
					<li>
						<a href="#value">
							value
						</a>
					</li>
					<li>
						<a href="#type">
							type
						</a>
					</li>
					<li>
						<a href="#label">
							label
						</a>
					</li>
					<li>
						<a href="#required-text">
							requiredText
						</a>
					</li>
					<li>
						<a href="#classes">
							classes
						</a>
					</li>
					<li>
						<a href="#datalist">
							datalist
						</a>
					</li>
					<li>
						<a href="#autocomplete">
							autocomplete
						</a>
					</li>
					<li>
						<a href="#accept">
							accept
						</a>
					</li>
					<li>
						<a href="#disabled">
							disabled
						</a>
					</li>
					<li>
						<a href="#max">
							max
						</a>
					</li>
					<li>
						<a href="#min">
							min
						</a>
					</li>
					<li>
						<a href="#maxlength">
							maxlength
						</a>
					</li>
					<li>
						<a href="#minlength">
							minlength
						</a>
					</li>
					<li>
						<a href="#multiple">
							multiple
						</a>
					</li>
					<li>
						<a href="#placeholder">
							placeholder
						</a>
					</li>
					<li>
						<a href="#required">
							required
						</a>
					</li>
					<li>
						<a href="#step">
							step
						</a>
					</li>
					<li>
						<a href="#autofocus">
							autofocus
						</a>
					</li>
					<li>
						<a href="#max-upload-size">
							maxUploadSize
						</a>
					</li>
					<li>
						<a href="#persistent">
							persistent
						</a>
					</li>
					<li>
						<a href="#validation">
							validation
						</a>
					</li>
					<li>
						<a href="#selectoptions">
							options (Only for select and checkbox)
						</a>
					</li>
				</ul>
				<h4 id="name">
					Name
				</h4>
				<p>
					<code>name</code> The name given to the input field. The name property is also used to map the data. Data from this field can be retrieved with this key. No duplicates in a single form allowed. The name is also being used to set an ID on the field.
				</p>
				<h4 id="value">
					Value
				</h4>
				<p>
					<code>value</code> The inital value of the field. Remember this value can be overwritten by cache from the persistent functionality.
				</p>
				<h4 id="type">
					Type
				</h4>
				<p>
					<code>type</code> The type of the input. Not all types are supported. Optional types are
				</p>
				<ul>
					<li>
						<code>text</code>
					</li>
					<li>
						<code>phone</code>
					</li>
					<li>
						<code>date</code>
					</li>
					<li>
						<code>number</code>
					</li>
					<li>
						<code>email</code>
					</li>
					<li>
						<code>tel</code>
					</li>
					<li>
						<code>password</code>
					</li>
					<li>
						<code>range</code>
					</li>
					<li>
						<code>hidden</code>
					</li>
					<li>
						<code>file</code>
					</li>
					<li>
						<code>select</code>
					</li>
					<li>
						<code>radio</code>
					</li>
					<li>
						<code>checkbox</code>
					</li>
					<li>
						<code>textarea</code>
					</li>
				</ul>
				<p>
					Datalist options for text are available.
				</p>
				<h4 id="label">
					Label
				</h4>
				<p>
					<code>label</code> The label added to the component
				</p>
				<h4 id="required-text">
					Required text
				</h4>
				<p>
					<code>requiredText</code> The text appended on the label if the field is required. Defaults to: <code>*</code>
				</p>
				<h4 id="classes">
					Classes
				</h4>
				<p>
					<code>classes</code> The classes you want to add on the component
				</p>
				<h4 id="datalist">
					Datalist
				</h4>
				<p>
					<code>datalist</code> Array of options added to the datalist
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ setFieldsDataList }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h4 id="autocomplete">
					Autocomplete
				</h4>
				<p>
					<code>autocomplete</code> Tags to add on the input based on default autocomplete tags
				</p>
				<h4 id="disabled">
					Disabled
				</h4>
				<p>
					<code>disabled</code> Add this value if you want to disable the input
				</p>
				<h4 id="max">
					Max
				</h4>
				<p>
					<code>max</code> Max number on the number input
				</p>
				<h4 id="min">
					min
				</h4>
				<p>
					<code>min</code> Min number on the number input
				</p>
				<h4 id="maxlength">
					Maxlength
				</h4>
				<p>
					<code>maxlength</code> Maxlength used for tekst inputs. Can also be used for the date type.
				</p>
				<h4 id="minlength">
					Minlength
				</h4>
				<p>
					<code>minlength</code> Minlength used for tekst inputs. Can also be used for the date type.
				</p>
				<h4 id="multiple">
					Multiple
				</h4>
				<p>
					<code>multiple</code> Multiple attribute used for files
				</p>
				<h4 id="placeholder">
					Placeholder
				</h4>
				<p>
					<code>placeholder</code> Placeholder attribute
				</p>
				<h4 id="required">
					Required
				</h4>
				<p>
					<code>required</code> Required attribute
				</p>
				<h4 id="autofucs">
					Autofocus
				</h4>
				<p>
					<code>autofoucs</code> Autofocus attribute
				</p>
				<h4 id="max-upload-size">
					Max upload size
				</h4>
				<p>
					<code>maxUploadSize</code> Only used for files
				</p>
				<h4 id="persistent">
					Persistent
				</h4>
				<p>
					<code>persistent</code> All field values in UI Fields will be saved to the localstorage. You can disable this option by adding the persistent key. Defaults to <code>true</code>. To disable this just add the false option.
				</p>
				<h4 id="validation">
					Validation
				</h4>
				<p>
					<code>validation</code> You can add validation to your field by the predefined validation. More information on this
						<NuxtLink to="/documentation/validation">
							here
						</NuxtLink>
				</p>
				<h4 id="selectoptions">
					Options (only for select and checkbox)
				</h4>
				<p>
					<code>options</code> You can add options for the select and checkbox input. The option attribute is always an array containing four possible values.
				</p>
					<ul>
						<li>
							<code>label</code>
						</li>
						<li>
							<code>value</code>
						</li>
						<li>
							<code>selected</code>
						</li>
						<li>
							<code>disabled</code>
						</li>
					</ul>
				<p>
					The label attribute is being used for the visual end.
					The value attribute is the direct value of the option.
					The selected attribute can be used to select the first active value, this value can be overwritten.
					The disabled option is to disable an option.
				</p>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			setField: `this.$uiFields.setField('Your_form_name_here',
	{
		name: 'Your_field_name'
	}
);`,
			setFields: `this.$uiFields.setFields('Your_form_name_here', [
	{
		name: 'Your_field_name'
	},
	{
		name: 'Your_field_name_2'
	}
]);`,
			setFieldsDataList: `this.$uiFields.setField('Your_form_name_here', 
	{
		name: 'Your_field_name',
		datalist: [
			'one',
			'two'
		]
	}
);`,
		};
	}
};
</script>