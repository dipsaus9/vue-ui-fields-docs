<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - New Form
				</h1>
				<p>
					When using UI Fields you first have to start by creating a new form instance. You can do this by using the UI Fields prototype created by installing UI Fields.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>this.$uiFields.new('Your_form_name_here');</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					Creating a new instance also returns the instance. You can also call this instance with the prototype. All functions are available on both methods.
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>Template</h2>
				<p>
					You can now use the UI Fields component in your template. This will automaticaly render the form (without fields for now).
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
					The component contains some options you can change. You can always change the class name by simply adding the class element to it. You can also change the first html element wrapping all fields. You can do this by adding a component tag.
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
					You can also change the base class name of the form. This class will be used as base for the entire form. This overwrites the base class you use in the install option.
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
			withClassName: 'this.$uiFields.new(\'Your_form_name_here\', \'my-awesome-class\');'
		};
	}
};
</script>