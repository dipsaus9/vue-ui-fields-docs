<!-- eslint-disable --->
<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - New Form
				</h1>
				<p>
					To create a new form with UI Fields you have to create a new form
					instance. You can do this by using the UI Fields prototype
					<code>$uiFields</code>.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ installCommand }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					Creating a new instance returns it. You can also call this instance
					with the prototype. All functions are available using both methods.
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>Template</h2>
				<p>
					You can now use the UI Fields component in your template. This will
					automaticaly render the form (without fields for now).
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ weirdHTML }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					The component some props required to render the component. Beside the
					name property you can add classes or change the component rendered by
					the component. This can be done by changing the
					<code>component</code> property.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ weirdHTML2 }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h2>Class name</h2>
				<p>
					You can change the base class name of the form, this class will be
					used as base for the entire form. This overwrites the base class you
					use in the install option.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ withClassName }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
			<div class="next">
				<NuxtLink to="/documentation/set-field">
					Set field(s)
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			weirdHTML: `<template>
	<UiFields name="Your_form_name_here" />
</template>`,
			weirdHTML2: `<UiFields 
	name="Your_form_name_here"
	component="fieldset"
	class="container-class"
/>`,
			/* eslint-disable */
			withClassName:
				"this.$uiFields.new('Your_form_name_here', 'my-awesome-class');",
			installCommand: `this.$uiFields.new('Your_form_name_here');`,
		};
	},
};
</script>
